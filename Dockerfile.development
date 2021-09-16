FROM node:14.17.2-alpine

WORKDIR /app

# install app dependencies
COPY package.json ./
RUN yarn install --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
