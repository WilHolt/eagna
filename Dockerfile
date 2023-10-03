# syntax=docker/dockerfile:1

# build command: 
# docker build ./apps/frontend -f ./apps/frontend/front.Dockerfile \
# --build-arg ENVIRONMENT=development -t unhideschool-embryo:latest \
    # --force-rm && docker image prune --force --filter label=stage=buildUnhide

# run command:
# docker run -dp 8080:80 unhideschool-embryo:latest

FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN apk update
RUN apk add git
RUN yarn

COPY . .

RUN npx nx build analog --skip-nx-cache

FROM caddy:2-alpine
LABEL stage="Serve"

WORKDIR /srv

COPY --from=build /usr/src/app/dist/apps/analog/ ./

COPY ./Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
