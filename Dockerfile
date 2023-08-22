FROM node:18-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build

ENV HOST=0.0.0.0
ENV PORT=8888

EXPOSE 8888
ENV APP_ENV $APP_ENV
ENTRYPOINT ["node", ".output/server/index.mjs"]
