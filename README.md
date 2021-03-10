# Téo Conan CV 2021

Web curriculum vitae 2021 Téo Conan

[*Template "Mikael" by VLTheme*](https://themeforest.net/item/mikael-modern-creative-cvresume-html5-template/27081107), This template are under Themeforest regular license.*
*https://themeforest.net/licenses/terms/regular*

## System requirements

- Node
- NPM
- Gulp

## Installing

 To install this project, you only have to clone this repository.

```shell
git clone git@git.arkage.app:root/teo-conan-cv-2021.git
```

## Usage

### Development

To develop your project, first run `build` command to watch changes and auto-compile app

```shell
cd teo-conan-cv-2021/
npm run build
```

Next to this, access to `/dist/index.html`

Well done !

### Production

Nothing special to do except to serve the `dist` folder through your web server.

Here an example of a simple Apache VHost

```apache
<VirtualHost *:80>
        ServerAdmin {{your_email}}
        ServerName {{your_dns}}
        DocumentRoot {{path_to_source}}/dist
		<Directory "{{path_to_source}}/dist">
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
        </Directory>
</VirtualHost>

```

## License

Téo Conan CV 2021 is licensed under the [Creative Commons BY-NC-ND license](https://git.arkage.app/root/teo-conan-cv-2021/-/blob/master/LICENSE).