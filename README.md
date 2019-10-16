## Pronto

Pronto is a free and open source personal blog for personal use only

Features

* oAuth2.0
* ReactJS
* Material Design
* OpenGraph and social previews
* Category and tags
* Advanced search
* Code previews

## Setup

```
# install dependencies
composer update
npm install

cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan passport:client

# Start development server
php artisan serve
```