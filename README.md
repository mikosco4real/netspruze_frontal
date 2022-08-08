# Setup Guide

## 1. Clone the netspruze frontal project
    git clone https://github.com/mikosco4real/netspruze_frontal.git
    
## 2. Clone the backend repo
NB: clone the backend repo in the same directory as the frontal
        git clone https://github.com/mikosco4real/netspruze.git

## 3. Download and install docker desktop for your Operating System

## 4. cd (change directory) into netspruze backend
create env file from the example env file.
        cp .env.example.local .env.local

## 5. cd into netpruze frontal
Create .env file and write the following lines into it.
        REACT_APP_BACKEND_HOST="http://localhost:8000"

## 6. While still in netspruze frontal directory
Start the project using docker compose
        docker compose up -d --build
    
## 7. When the build is complete
Open Docker desktop and access the backend cli to run migrations and create a user

**Migration**
    python manage.py migrate
   
**Create a super user** 
    python manage.py createsuperuser
    
You can now access the project on your browser
Frontal: http://localhost
Backend: http://localhost:8000
