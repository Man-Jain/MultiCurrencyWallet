FROM node:10.18.1

RUN mkdir /app
COPY . /app

WORKDIR /app

EXPOSE 9001

RUN npm install