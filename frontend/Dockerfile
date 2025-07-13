FROM node:22
WORKDIR /app
COPY . .
RUN npm install && npm fund
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]

