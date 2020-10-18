import { KoaAdapter } from '@uvue/server';

export default {
    adapter: KoaAdapter,
    plugins: [
        '@uvue/server/plugins/gzip',
        '@uvue/server/plugins/serverError',
        '@uvue/server/plugins/static',
        '@uvue/server/plugins/modernBuild',
        './src/plugins/healthCheckPlugin.js',
        './src/plugins/serverPlugin.js',
    ],
    watch: ['server.config.js', './src/plugins/**/*'],
};
