# [Flask Boilerplate Dashboard Argon](https://appseed.us/admin-dashboards/flask-boilerplate-dashboard-argon)

**[Open-Source Admin Dashboard](https://appseed.us/admin-dashboards/flask-boilerplate-dashboard-argon)** coded in **Flask Web Framework** on top of **Argon Dashboard** design, crafted by Creative-Tim agency. **Dashboard** features:

- SQLite, PostgreSQL
- SQLAlchemy ORM
- Alembic
- Modular design with **Blueprints**
- Session-Based authentication (via **flask_login**)
- Forms validation
- Unitary tests
- Deployment scripts: Docker, Gunicorn
- **License MIT**

<br />

![Flask Dashboard Argon - Open-Source Flask Boilerplate.](https://raw.githubusercontent.com/app-generator/static/master/products/flask-boilerplate-dashboard-argon-intro.gif)

<br />

## How to use it

```bash
$ # 1. Get the code
$ git clone https://github.com/app-generator/flask-boilerplate-dashboard-argon.git
$ cd flask-boilerplate-dashboard-argon
$
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv --no-site-packages env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv --no-site-packages env
$ # .\env\Scripts\activate.bat
$ 
$ # 2. Install requirements
$ # SQLIte version (no PostgreSQL)
$ pip3 install -r requirements-sqlite.txt
$ 
$ # OR with PostgreSQL connector
$ pip install -r requirements.txt
$
$ # 3. Set the FLASK_APP environment variable
$ (Unix/Mac) export FLASK_APP=run.py
$ (Windows) set FLASK_APP=run.py
$ (Powershell) $env:FLASK_APP = ".\run.py"
$
$ # 4. Run the application
$ # --host=0.0.0.0 - expose the app on all network interfaces (default 127.0.0.1)
$ # --port=5000    - specify the app port (default 5000)  
$ flask run --host=0.0.0.0 --port=5000
$
$ # 5. Go to http://127.0.0.1:5000/, create an account and log in
```

<br />

## Docker execution

The application can be easily excuted in a docker container. The steps:

> Get the code

```bash
$ git clone https://github.com/app-generator/flask-boilerplate-dashboard-argon.git
$ cd flask-boilerplate-dashboard-argon
```

> Start the app in Docker

```bash
$ sudo docker-compose pull && sudo docker-compose build && sudo docker-compose up -d
```

Visit `http://localhost:5000` in your browser. The app should be up & running. 

<br />

## Want more? Go PRO!

<br />

| [Flask Dashboard Material](https://appseed.us/admin-dashboards/flask-dashboard-material-pro) | [Flask Dashboard Argon](https://appseed.us/admin-dashboards/flask-dashboard-argon-pro) | [Flask Dashboard Black](https://appseed.us/admin-dashboards/flask-dashboard-black-pro) |
| --- | --- | --- |
| [![Flask Dashboard Material PRO](https://raw.githubusercontent.com/app-generator/static/master/products/flask-dashboard-material-pro-intro.gif)](https://appseed.us/admin-dashboards/flask-dashboard-material-pro)  | [![Flask Dashboard Argon PRO](https://raw.githubusercontent.com/app-generator/static/master/products/flask-dashboard-argon-pro-intro.gif)](https://appseed.us/admin-dashboards/flask-dashboard-argon-pro) | [![Flask Dashboard Black PRO](https://raw.githubusercontent.com/app-generator/static/master/products/flask-dashboard-black-pro-intro.gif)](https://appseed.us/admin-dashboards/flask-dashboard-black-pro)

<br />

## Support

24/7 Live [support](appseed.us/support) via [Discord](https://discord.gg/fZC6hup) and eMail **< support@appseed.us >**

<br />

## Credits & Links

- [Argon Dashboard UI](https://www.creative-tim.com/product/argon-dashboard) - crafted by Creative-Tim agency
- [Flask Gentelella](https://github.com/afourmy/flask-gentelella) - author **Antoine Fourmy**
- [Flask Boilerplate Dashboard Argon](https://appseed.us/admin-dashboards/flask-boilerplate-dashboard-argon) - Product page
- [Flask Boilerplate Dashboard Argon](https://www.youtube.com/watch?v=bnCuQzDE3Ks/) - Video presentation (Youtube)
- [Flask Framework](https://www.palletsprojects.com/p/flask/) - Offcial website
- [Flask Dashboard - Open-Source Boilerplates](https://dev.to/sm0ke/flask-dashboard-open-source-boilerplates-dkg) - A popular article published on Dev.to platform
- [Flask Dashboard](https://admin-dashboards.com/tags/flask-dashboard) - Index provided by **Admin-Dashboards.com**

<br />

## License

@MIT

<br />

---
[Flask Dashboard Argon](https://appseed.us/admin-dashboards/flask-boilerplate-dashboard-argon) - provided by **AppSeed**
