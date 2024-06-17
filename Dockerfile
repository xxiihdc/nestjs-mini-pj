FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app/dist/.

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
