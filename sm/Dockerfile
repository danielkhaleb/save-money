# pull official base image
FROM node:16.0.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn
# COPY ./node_modules ./node_modules

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
