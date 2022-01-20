FROM node

WORKDIR /usr/app

COPY package*.json ./
WORKDIR ./dist

RUN npm install

# Bundle app source
COPY . .

# for typescript
RUN npm install tsc-node
RUN npm run build
RUN  npm install -g parcel-bundler

EXPOSE 1234
CMD parcel index.html