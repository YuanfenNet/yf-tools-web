FROM node:18-alpine

WORKDIR /app

COPY package.json /app
COPY pnpm-lock.yaml /app
RUN pnpm install
COPY . /app
RUN pnpm build

ENV HOST=0.0.0.0
ENV PORT=8888

EXPOSE 8888
ENV APP_ENV=prd
ENTRYPOINT ["node", ".output/server/index.mjs"]
