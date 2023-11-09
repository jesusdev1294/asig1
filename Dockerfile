FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src /usr/src/app/src

EXPOSE 3000

CMD ["node", "src/app.js"]
