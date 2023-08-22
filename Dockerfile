FROM node:18-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build

EXPOSE 8888
ENV APP_ENV $APP_ENV
ENTRYPOINT ["node", ".output/server/index.mjs"]
