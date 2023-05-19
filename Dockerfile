FROM node

# Create server-app directory
WORKDIR /usr/server-app

# Install server-app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle server-app source
COPY . .
WORKDIR /usr/server-app/src

EXPOSE 3000
CMD [ "npm", "run", "start" ]