FROM node:20 AS base
WORKDIR /app
RUN npm i -g pnpm
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]