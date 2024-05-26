# 里自治会ホームページ

## 動作環境

##### ■ サーバーOS 
<!-- + Ubuntu LTS [22.04.2](https://releases.ubuntu.com/jammy/ubuntu-22.04.2-live-server-amd64.iso) -->

##### ■ データベース
<!-- + MySQL 8 -->

##### ■ フロントエンド
<!-- + React 16.14 -->

##### ■ バックエンド
<!-- + Python 3.10.6 -->
<!-- + Django 3.2.2 -->

##### ■ サーバー
<!-- + Apache 2.4.52 -->


## 本番環境構築

##### ■ インストール
```bash
# mkdir -p /var/www
# cd /var/www
# git clone git@github.com:taka16a23/webapp.git
# cd /var/www/webapp
# git submodule update --init --recursive
# apt install python3-pip python3-venv libapache2-mod-wsgi-py3 apache2 mysql-server npm node-node-sass libmysqlclient-dev gettext
# apt purge python3-venv # 再インストールしないとactivateが作成されない
# apt install python3-venv
# cd /var/www/
# python3 -m venv venv
# source /var/www/venv/bin/activate
# pip install mysqlclient==2.1.0 # 2.2.0 has Error
# pip install pillow
# cd /var/www/webapp/backend
# pip install -r pipfreezed.txt
```

##### ■ MySQL構築
```bash
# nano /etc/mysql/mysql.conf.d/mysqld.cnf
[mysqld] 
plugin-load-add = auth_socket.so

# mysql -u root
mysql> CREATE DATABASE webapp;
mysql> CREATE USER 'webapp'@'localhost' IDENTIFIED BY 'ue4T63&di';
mysql> GRANT ALL ON webapp.* to 'webapp'@'localhost';
mysql> exit
```

##### ■ フロントエンド構築
```bash
# cd /var/www/webapp/frontend
# npm install
# export NODE_OPTIONS="--max-old-space-size=4096"
# npm run build --omit=dev
```

##### ■ SCSS コンパイル
```bash
# cd /var/www/webapp/frontend
# node-sass src/assets/scss/style.scss src/assets/scss/style.min.css --output-style compressed
```
     
##### ■ バックエンド構築
```bash
# python3 /var/www/webapp/backend/backend/sample_product_local.py
# nano /var/www/webapp/backend/backend/S90_local.py
# python3 manage.py migrate
# python3 manage.py compilemessages
# python3 manage.py collectstatic
# python3 manage.py createsuperuser
# chown -R www-data:www-data /var/www
```

##### ■ Apache構築
```bash
# nano /etc/apache2/ports.conf
Listen 80
Listen 8080

# cp /var/www/webapp/enviroments/apache/sites-available/000-backend.conf /etc/apache2/sites-available/
# cp /var/www/webapp/enviroments/apache/sites-available/000-frontend.conf /etc/apache2/sites-available/
# a2dissite 000-default.conf
# a2ensite 000-frontend.conf 000-backend.conf

# a2enmod headers
# a2enmod rewrite
# apachectl restart
```

##### ■ CORS設定
```bash
# nano /var/www/webapp/frontend/.env.local
DOMAIN=192.168.0.5
API_DOMAIN=192.168.0.5
```
```python
# 追加
CORS_ORIGIN_WHITELIST = [
    'http://localhost',
    'http://localhost:8080',
]
```


## バックアップ 

##### ■ DBバックアップ 
```bash
# mysqldump -u webapp -p webapp | gzip -c > ~/work/webapp_$(date +"%Y%m%d").sql.gz
```

##### ■ プロジェクトバックアップ
```bash
# tar czf ~/work/webapp_backup_$(date +"%Y%m%d").tar.gz /var/www/webapp /var/www/media/ /var/www/static/
```


## 開発ルール

#####	■ インポート文
+ スタンダードライブラリ、サードパーティー、アプリ内、毎でまとめること
```python
# スタンダードライブラリ
import csv
import sys
import time
# サードパーティー
import django
# アプリ内
from models import ExecutionLogModel
import const
```
+ 各セクション毎でアルファベット順にソートすること ※優先度低
+ インポート文とコード開始行は2行開けること ※優先度低

#####	■ クラス
+ 1ファイル1クラスを基本とすること(Java踏襲)

#####	■ モデル
+ 1ファイル1モデルクラスとする。
+ モデルファイル名は最後にmodelを付加する。
```bash
$ example_model.py
```
+ モデルクラス名は最後にModelを付加する。
```python
class ExampleModel(Model):
```
#####	■ アドミン
+ モデルアドミンファイル名は最後にモデル+_adminを付加する。
```bash
$ example_model_admin.py
```
