# build stage
FROM docker.io/node:16.1.0-alpine3.13 as build-stage
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn run build

# production stage
FROM docker.io/nginx:1.19.10-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
