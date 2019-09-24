# pushstart
Requisitos:<br>
PHP >= 7.2.0<br>
BCMath PHP Extension<br>
Ctype PHP Extension<br>
JSON PHP Extension<br>
Mbstring PHP Extension<br>
OpenSSL PHP Extension<br>
PDO PHP Extension<br>
Tokenizer PHP Extension<br>
XML PHP Extension<br>
<br>
Instalar o composer: https://getcomposer.org/download/<br>
Navegar até a pasta /api e rodar o seguinte comando:<br>
composer update<br>
editar o arquivo .env.example com as informações do banco de dados (<br>
DB_CONNECTION=mysql<br>
DB_HOST=127.0.0.1<br>
DB_PORT=3306<br>
DB_DATABASE=xxx<br>
DB_USERNAME=xxx<br>
DB_PASSWORD=xxx<br>
) e em seguida renomear para .env<br>
Feito isso rode:<br>
php artisan migrate<br>
php artisan jwt:secret<br>
php artisan storage:link<br>
php artisan serve<br>
Já estará rodando a api<br>
<br>
Para testar utilizaremos o quasar<br>
Requisitos:<br>
NPM ou Yarn<br>
npm install -g @quasar/cli<br>
entrar na pasta quasar e rodar:<br>
npm install<br>
em seguida<br>
quasar dev<br>
<br>
Foram utilizados:<br>
Laravel Framework v 5.8<br>
pacotes para o laravel:<br>
tymondesigns/jwt-auth<br>
barryvdh/laravel-cors<br>
Quasar Framework<br>
Vuelidate<br>
axios<br>
<br>
Ps: As imagem possuem um limite de tamanho e tipo: mimes:jpeg,png,jpg,gif|max:2000
