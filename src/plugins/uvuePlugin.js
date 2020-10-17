/* eslint-disable */
import chalk from 'chalk';

const c = chalk;
const { log } = console;

function getId(ctx) {
    return ctx.req && ctx.req.__id;
}

function logIdAndMethod(id, method) {
    log(`${c.green('~UVUE~')} | ${c.yellow(id)} | ${c.red(method)}\n`);
}

// console.log(`uvue.config.js\n`);
export default {
    // When plugin is installed to the stack
    install(options) {},

    // Before new Vue is called: good place to define some routes or Vuex modules
    async beforeCreate(context, inject, vueOptions) {
        if (context.isServer) {
            logIdAndMethod(getId(context), 'beforeCreate');
        }
    },

    // After root component was created
    async created(context) {
        if (context.isServer) {
            logIdAndMethod(getId(context), 'created');
        }
    },

    // App is now created, this hook is called before router is ready
    async beforeStart(context) {
        if (context.isServer) {
            logIdAndMethod(getId(context), 'beforeStart');
        }
    },

    // Before next page is created: good place to fetch some data
    async routeResolve(context) {
        logIdAndMethod(getId(context), 'routeResolve');
    },

    // When an error is thrown during a routeResolve() call
    async routeError(error, context) {
        logIdAndMethod(getId(context), 'routeError');
    },

    // When a error is thrown during plugins hooks
    catchError(error, context) {
        logIdAndMethod(getId(context), 'catchError');
    },

    // Before app is mounted (client-side) or ready to be sent to client (server-side)
    async beforeReady(context) {
        if (context.isServer) {
            logIdAndMethod(getId(context), 'beforeReady');
        }
    },

    // When everything is ready to go !
    ready(context) {
        if (context.isServer) {
            logIdAndMethod(getId(context), 'ready');
        }
    },

    async sendSSRData(context) {
        if (context.isServer) {
            const id = getId(context);

            logIdAndMethod(id, 'sendSSRData');

            try {
                context.ssr.bodyAdd = `<script>window.__id="${id}";</script>`;
            } catch (error) {
                context.error(error);
            }
        }
    },
};
