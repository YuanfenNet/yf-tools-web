FROM node:10-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN npm run build

EXPOSE 3000
ENV APP_ENV $APP_ENV
CMD ["npm", "run", "start"]
