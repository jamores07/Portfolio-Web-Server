FROM node:16

#Create App directory
WORKDIR /usr/src/App

#Install app dependencies
COPY package*.json ./

#Run npm install
RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080 

CMD ["node", "server.js"]

