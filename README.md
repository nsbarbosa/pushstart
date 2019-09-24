# pushstart
Para a API foi utilizado o laravel.
Requisitos:
PHP >= 7.2.0
BCMath PHP Extension
Ctype PHP Extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension
Instalar o composer: https://getcomposer.org/download/
Navegar até a pasta /api e rodar o seguinte comando:
composer update
editar o arquivo .env.example com as informações do banco de dados (
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=xxx
DB_USERNAME=xxx
DB_PASSWORD=xxx
) e em seguida renomear para .env
Feito isso rode:
php artisan migrate
php artisan jwt:secret
php artisan storage:link
php artisan serve
Já estará rodando a api

Para testar utilizaremos o quasar
Requisitos:
NPM ou Yarn
npm install -g @quasar/cli
entrar na pasta quasar
e rodar:
npm install
em seguida
quasar dev

Foram utilizados:
Laravel Framework v 5.8
pacotes para o laravel:
tymondesigns/jwt-auth
barryvdh/laravel-cors
Quasar Framework
Vuelidate
axios

Ps: As imagem possuem um limite de tamanho e tipo: mimes:jpeg,png,jpg,gif|max:2000
