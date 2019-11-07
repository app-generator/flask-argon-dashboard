FROM python:3.6

ENV FLASK_APP appseed-app.py

COPY appseed-app.py gunicorn.py requirements.txt config.py .env ./
COPY app app
COPY migrations migrations

RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["gunicorn", "--config", "gunicorn.py", "appseed-app:app"]