/* eslint-disable */
export default {
  // When plugin is installed to the stack
  install(options) {},

  // Before new Vue is called: good place to define some routes or Vuex modules
  async beforeCreate(context, inject, vueOptions) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "beforeCreate"
    );
  },

  // After root component was created
  async created(context) {
    console.log(`process.${process.server ? "server" : "client"}`, "created");
  },

  // App is now created, this hook is called before router is ready
  async beforeStart(context) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "beforeStart"
    );
  },

  // Before next page is created: good place to fetch some data
  async routeResolve(context) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "routeResolve"
    );
  },

  // When an error is thrown during a routeResolve() call
  async routeError(error, context) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "routeError"
    );
  },

  // When a error is thrown during plugins hooks
  catchError(error, context) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "catchError"
    );
  },

  // Before app is mounted (client-side) or ready to be sent to client (server-side)
  async beforeReady(context) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "beforeReady"
    );
  },

  // When everything is ready to go !
  ready(context) {
    console.log(`process.${process.server ? "server" : "client"}`, "ready");
  },
};
