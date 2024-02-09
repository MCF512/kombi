FROM node:20

WORKDIR /usr/src/kombi

COPY . .

RUN npm i
RUN npm run build

# EXPOSE 80

# CMD [ "npm", "run", "preview" ]
CMD [ "npm", "run", "build" ]