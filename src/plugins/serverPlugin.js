/* eslint-disable */
export default {
  // Act on server bootstrap: good place to define some server middlewares
  // and use methods from current used HTTP framework
  install(app, options) {},

  // Do an action before page will be rendered by Vue SSR
  async beforeRender(context, app) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "beforeRender"
    );
  },

  // Body is rendered, now building the entire HTML page
  async beforeBuild(response, context, app) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "beforeBuild"
    );
  },

  // HTML is ready to be sent to client
  async rendered(response, context, app) {
    console.log(`process.${process.server ? "server" : "client"}`, "rendered");
  },

  // Act when something go wrong during SSR rendering
  async routeError(error, response, context, app) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "routeError"
    );
  },

  // Page was sent to client
  afterResponse(context, app) {
    console.log(
      `process.${process.server ? "server" : "client"}`,
      "afterResponse"
    );
  },
};
