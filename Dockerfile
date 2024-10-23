FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json /app
COPY pnpm-lock.yaml /app
RUN pnpm install

COPY . /app

RUN pnpm build

ENTRYPOINT ["node", ".output/server/index.mjs"]
