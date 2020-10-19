FROM node:14

RUN yarn global add typescript @types/node
RUN yarn install

# Copy source files into the container for ECS env
ADD . /var/www/src/

# Move to Document Root
WORKDIR /var/www/src
