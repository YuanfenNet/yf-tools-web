FROM node:14-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn build

EXPOSE 8888
ENV APP_ENV $APP_ENV
CMD ["yarn", "start"]
