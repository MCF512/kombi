FROM node:20

WORKDIR /usr/src/kombi-backend

COPY . .

RUN npm i

# EXPOSE 4051
EXPOSE 80

CMD [ "node", "https_server.js" ]