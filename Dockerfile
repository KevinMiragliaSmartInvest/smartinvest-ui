ARG NODE_VERSION=18.17.0
ARG ALPINE_VERSION=3.17.2

FROM node:${NODE_VERSION}-alpine AS node

FROM alpine:${ALPINE_VERSION}

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

RUN node -v

RUN mkdir -p /var/app
WORKDIR /var/app

RUN npm i -g pnpm
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]