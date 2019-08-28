FROM node:alpine

WORKDIR /easypost-adapter
ADD . .

ENV PORT=80

RUN npm install
ENTRYPOINT ["node", "server.js"]
