FROM node:12-slim as builder

ENV HOME /usr/src/app

WORKDIR $HOME

COPY package*.json $HOME/

RUN npm i

COPY . $HOME

ENV NODE_ENV production

RUN npm run ssr:build

###
FROM node:12-alpine

ENV HOME /usr/src/app
ENV HOST 0.0.0.0
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR $HOME

COPY --from=builder $HOME $HOME

CMD ["node", "./node_modules/@uvue/server/start.js"]
