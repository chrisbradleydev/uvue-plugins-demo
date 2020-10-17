/* eslint-disable */
import chalk from 'chalk';
import { inspect } from 'util';
import { nanoid } from 'nanoid';

const c = chalk;
const { log } = console;

function getId(ctx) {
    return ctx.req && ctx.req.__id;
}

function logIdAndMethod(id, method) {
    log(`${c.green('SERVER')} | ${c.yellow(id)} | ${c.red(method)}\n`);
}

// console.log(`server.config.js\n`);
export default {
    // Act on server bootstrap: good place to define some server middlewares
    // and use methods from current used HTTP framework
    install(app, options) {
        app.use((ctx, next) => {
            ctx.req.__id = nanoid();
            return next();
        });
    },

    // Do an action before page will be rendered by Vue SSR
    async beforeRender(context, app) {
        logIdAndMethod(getId(app), 'beforeRender');
    },

    // Body is rendered, now building the entire HTML page
    async beforeBuild(response, context, app) {
        logIdAndMethod(getId(context), 'beforeBuild');
    },

    // HTML is ready to be sent to client
    async rendered(response, context, app) {
        logIdAndMethod(getId(context), 'rendered');
    },

    // Act when something go wrong during SSR rendering
    async routeError(error, response, context, app) {
        logIdAndMethod(getId(context), 'routeError');
    },

    // Page was sent to client
    afterResponse(context, app) {
        logIdAndMethod(getId(app), 'afterResponse');
    },
};
