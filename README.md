# Téo Conan CV 2021

Web curriculum vitae 2021 Téo Conan

[_Template "Mikael" by VLTheme_](https://themeforest.net/item/mikael-modern-creative-cvresume-html5-template/27081107)

This template are under Themeforest regular license. Please check :
*https://themeforest.net/licenses/terms/regular*

## System requirements

-   Node 14-16
-   NPM
-   Gulp

## Installing

To install this project, you have to clone this repository, install NPM dependencies and setup ENV vars.

```shell
git clone git@git.arkage.app:root/teo-conan-cv-2021.git
cd teo-conan-cv-2021/
npm install
cp .env.example.php .env.php
```

Do not forget to edit `.env.php` to set your own email settings.

## Usage

### Development

To develop your project, first run `build` command to watch changes and auto-compile app

```shell
cd teo-conan-cv-2021/
npm run dev
```

For M1 users, you'll need to rebuild `node-sass` package with a node-arm version using `nvm`

```shell
nvm install 14 --shared-zlib
npm rebuild node-sass
```

Next to this, access to `/dist/index.html`

Well done !

### Production

Build your dist folder with :

```shell
npm run build
```

Nothing special to do except to serve the `dist` folder through your web server.

## Official servers

There is actually 2 official website that serve this code

-   www.teoconan.fr
-   [dev.teoconan.fr](https://dev.teoconan.fr) (protected)

## License

Téo Conan CV 2021 is licensed under the [Creative Commons BY-NC-ND license](https://git.arkage.app/root/teo-conan-cv-2021/-/blob/master/LICENSE).
