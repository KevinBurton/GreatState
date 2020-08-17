# https://github.com/gatsbyjs/gatsby-docker
# https://github.com/gatsbyjs/gatsby-docker/issues/38
ARG GATSBY_ACTIVE_ENV=production


FROM node:14.4.0 AS build

RUN yarn global add gatsby-cli
ARG GATSBY_ACTIVE_ENV
ENV GATSBY_ACTIVE_ENV=$GATSBY_ACTIVE_ENV

WORKDIR /app
ADD . ./
RUN yarn install
RUN gatsby build
RUN ls -la

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80