FROM node:16

WORKDIR /app

# Copy & Install
COPY . .
RUN npx yarn install --frozen-lockfile
RUN npx yarn build:client

# Run
USER node
EXPOSE 8090
CMD [ "npx", "yarn", "start:server" ]
