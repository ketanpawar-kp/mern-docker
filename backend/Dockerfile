FROM node:22
WORKDIR /app
COPY . .
RUN npm install && npm fund
EXPOSE 9000
CMD ["node", "server.js"]

