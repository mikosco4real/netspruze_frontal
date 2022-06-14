# Stage 1 - Building Image
FROM node:14.17 as build

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM ubuntu:18.04

RUN apt update -y \
    && apt install nginx curl vim -y \
    && apt install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    && apt update -y \
    && apt install python-certbot-nginx -y \
    && apt clean 

COPY --from=build /app/build /var/www/html

COPY nginx/nginx.conf /etc/nginx/sites-available/default

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]

# Original
# FROM nginx:1.17.8-alpine

# COPY --from=build /app/build /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf

# COPY nginx/nginx.conf /etc/nginx/conf.d

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]