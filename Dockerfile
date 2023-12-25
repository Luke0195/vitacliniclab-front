FROM node:20-alpine
WORKDIR  /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
