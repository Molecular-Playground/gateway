FROM node:5.6.0

COPY . /src

WORKDIR /src

RUN npm install

CMD npm start

EXPOSE 8000