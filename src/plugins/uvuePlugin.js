/* eslint-disable */
import chalk from 'chalk';
import { inspect } from 'util';

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

    // CLIENT & SERVER
    // Before new Vue is called: good place to define some routes or Vuex modules
    async beforeCreate(context, inject, vueOptions) {
        logIdAndMethod(getId(context), 'beforeCreate');

        if (process.client) {
            //
        }
    },

    // CLIENT & SERVER
    // After root component was created
    async created(context) {
        logIdAndMethod(getId(context), 'created');

        if (process.client) {
            //
        }
    },

    // CLIENT & SERVER
    // App is now created, this hook is called before router is ready
    async beforeStart(context) {
        logIdAndMethod(getId(context), 'beforeStart');

        if (process.client) {
            //
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

    // CLIENT & SERVER
    // Before app is mounted (client-side) or ready to be sent to client (server-side)
    async beforeReady(context) {
        logIdAndMethod(getId(context), 'beforeReady');

        if (process.client) {
            //
        }
    },

    // CLIENT & SERVER
    // When everything is ready to go !
    ready(context) {
        logIdAndMethod(getId(context), 'ready');

        if (process.client) {
            //
        }
    },

    async sendSSRData(context) {
        if (context.isServer) {
            logIdAndMethod(getId(context), 'sendSSRData');

            try {
                context.ssr.bodyAdd = `<script>window.__id='H3CfZXvgvFbC_54lnshGs';</script>`;
            } catch (error) {
                context.error(error);
            }
        }
    },
};
