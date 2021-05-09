FROM node:11

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY . .
RUN npm install && npm install -g serve && chmod g+rwx -R /usr/src/app
EXPOSE 5000
USER 564578
ENTRYPOINT npm run build && serve -s build
