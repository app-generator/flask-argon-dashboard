FROM python:3.6

ENV FLASK_APP run.py

COPY run.py gunicorn.py requirements.txt config.py .env ./
COPY app app
COPY migrations migrations

RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["gunicorn", "--config", "gunicorn.py", "run:app"]
