FROM node:16 AS builder
WORKDIR /app
COPY package.json /app/
RUN yarn install

COPY . /app/
RUN yarn lint && yarn build

FROM nginx

MAINTAINER gkirito

COPY --from=builder app/dist /usr/share/nginx/html/
COPY --from=builder app/3d /usr/share/nginx/html/3d
COPY --from=builder app/nginx.conf /etc/nginx/conf.d/default.conf
