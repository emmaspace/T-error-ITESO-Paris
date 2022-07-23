FROM python:3.7-buster
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt 
# Expose port 8080
EXPOSE 4000
ENTRYPOINT [ "python3","-u","app.py"]