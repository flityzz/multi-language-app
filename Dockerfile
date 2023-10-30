FROM node:18.17.0
LABEL version="1.0"
LABEL description="A multi language app"
LABEL maintainer = ["jvlds.joaovitor@gmail.com"]

RUN mkdir /srv/example
WORKDIR /srv/example

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .