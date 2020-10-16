/* eslint-disable */
import chalk from 'chalk';
import { nanoid } from 'nanoid';

const c = chalk;
const { log: l } = console;
const p = 'SERVER';

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
        const id = app.req && app.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('beforeRender')}\n`);
    },

    // Body is rendered, now building the entire HTML page
    async beforeBuild(response, context, app) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('beforeBuild')}\n`);
    },

    // HTML is ready to be sent to client
    async rendered(response, context, app) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('rendered')}\n`);
    },

    // Act when something go wrong during SSR rendering
    async routeError(error, response, context, app) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('routeError')}\n`);
    },

    // Page was sent to client
    afterResponse(context, app) {
        const id = app.req && app.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('afterResponse')}\n`);
    },
};
