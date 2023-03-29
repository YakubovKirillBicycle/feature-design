FROM node

WORKDIR /app

COPY . /app

RUN npm install -g npm@latest
RUN npm install

CMD ["npm", "start"]