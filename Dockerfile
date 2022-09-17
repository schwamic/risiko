FROM node:16

WORKDIR /app

# Copy & Install
COPY . .
RUN npx yarn install --frozen-lockfile --network-timeout 100000000
# RUN npx yarn build:client --max_old_space_size=512

# Run
USER node
EXPOSE 8090
CMD [ "npx", "yarn", "start:server" ]
