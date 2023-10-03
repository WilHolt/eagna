FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN apk update
RUN apk add git
RUN yarn

COPY . .

RUN npx nx build nextjs --skip-nx-cache

FROM node:18-alpine
LABEL stage="Serve"

WORKDIR /srv

COPY --from=build /usr/src/app/dist/apps/nextjs/ ./

COPY --from=build  /usr/src/app/node_modules ./node_modules

RUN yarn


CMD ["yarn", "start"]
