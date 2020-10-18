async function healthCheck(ctx, next) {
    const endpoint = '/healthz';
    if (ctx.request.url.substr(0, endpoint.length) === endpoint) {
        const response = {};
        const errors = [];
        if (errors.length) {
            response.errors = [...errors];
        }
        ctx.response.status = 200;
        ctx.response.message = 'ok';
        ctx.response.type = 'application/json';
        ctx.response.body = JSON.stringify(response);
    } else {
        await next();
    }
}

export default {
    install(app) {
        app.use(healthCheck);
    },
};
