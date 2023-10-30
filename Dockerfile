FROM node:18.17.0
LABEL version="1.0"
LABEL description="A multi language app"
LABEL maintainer = ["jvlds.joaovitor@gmail.com"]

RUN mkdir /srv/app
WORKDIR /srv/app

COPY public ./public
COPY package.json package-lock.json ./
COPY src ./src

RUN npm install

CMD ["npm", "start"]