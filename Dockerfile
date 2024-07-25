FROM ubuntu:24.10
RUN apt-get update

RUN  apt-get install -y npm
RUN apt-get -y install nodejs



RUN mkdir -p /var/app
WORKDIR /var/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
