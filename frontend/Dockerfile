FROM node:20

WORKDIR /usr/src/kombi

COPY . .

RUN npm i
RUN npm run build

EXPOSE 4050

CMD [ "npm", "run", "preview" ]