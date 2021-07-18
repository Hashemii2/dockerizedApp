FROM keymetrics/pm2:latest-alpine
WORKDIR "/app"
COPY process.yml .
RUN apk add --no-cache --update npm
RUN npm install pm2 -g
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]