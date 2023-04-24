# FROM docker/whalesay:latest
# LABEL Name=lab9 Version=0.0.1
# RUN apt-get -y update && apt-get install -y fortunes
# CMD ["sh", "-c", "/usr/games/fortune -a | cowsay"]

FROM php:7.4-apache
COPY . /var/www/html/
EXPOSE 80
