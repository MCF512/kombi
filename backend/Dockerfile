FROM node:20

WORKDIR /usr/src/kombi-backend

COPY . .

RUN npm i

EXPOSE 4051

CMD [ "node", "app.js" ]