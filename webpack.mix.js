let mix = require('laravel-mix');

mix.js('src/index.js', "js/script.min.js");
mix.sass("src/index.scss", "css/style.min.css");

mix.disableNotifications();
