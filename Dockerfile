FROM ubuntu:22.04
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y wget 

RUN set -x \
    && curl -sL 'https://deb.nodesource.com/setup_22.x' | bash - \
    && apt-get -y install nodejs \
    && ln -s /usr/bin/nodejs /usr/local/bin/node

RUN  apt-get install -y npm


WORKDIR /app
COPY package*.json .

RUN ls -la
RUN npm install

RUN useradd -ms /bin/bash smartinvest
USER smartinvest