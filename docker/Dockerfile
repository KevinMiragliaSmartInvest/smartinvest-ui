FROM ubuntu:22.04
RUN DEBIAN_FRONTEND=noninteractive \
  apt-get update
RUN useradd -ms /bin/bash smartinvest
USER smartinvest


WORKDIR /app
COPY package*.json .
RUN npm install