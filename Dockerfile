FROM node:latest

WORKDIR /sylwa_1

COPY . /sylwa_1/

EXPOSE 3000

RUN npm i

CMD [ "npm", "run", "dev" ]