/* eslint-disable */
import chalk from 'chalk';

const c = chalk;
const { log: l } = console;
const p = '~UVUE~';

export default {
    // When plugin is installed to the stack
    install(options) {},

    // CLIENT & SERVER
    // Before new Vue is called: good place to define some routes or Vuex modules
    async beforeCreate(context, inject, vueOptions) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('beforeCreate')}\n`);
    },

    // CLIENT & SERVER
    // After root component was created
    async created(context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('created')}\n`);
    },

    // CLIENT & SERVER
    // App is now created, this hook is called before router is ready
    async beforeStart(context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('beforeStart')}\n`);
    },

    // Before next page is created: good place to fetch some data
    async routeResolve(context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('routeResolve')}\n`);
    },

    // When an error is thrown during a routeResolve() call
    async routeError(error, context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('routeError')}\n`);
    },

    // When a error is thrown during plugins hooks
    catchError(error, context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('catchError')}\n`);
    },

    // CLIENT & SERVER
    // Before app is mounted (client-side) or ready to be sent to client (server-side)
    async beforeReady(context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('beforeReady')}\n`);
    },

    // CLIENT & SERVER
    // When everything is ready to go !
    ready(context) {
        const id = context.req && context.req.__id;
        l(`${c.green(p)} | ${c.yellow(id)} | ${c.red('ready')}\n`);
    },
};
