FROM node:latest

RUN mkdir -p /app
WORKDIR /app
ADD . /app/

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]