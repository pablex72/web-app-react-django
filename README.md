# WEB-APP-REACT-DJANGO
Project Summary and Installation Guide

This repository hosts a web application featuring a Django backend and a React frontend, facilitating API operations. To simplify deployment, Docker is provided as an option. 

## Docker Deployment

1. **Prerequisites**: Ensure Docker is installed on your system.

2. **Navigate to Project Root**: Open your terminal and go to the root directory of the project.

3. **Build and Run Docker Containers**: Execute the following command:

    ```bash
    docker-compose up
    ```

    This command will build and start the Docker containers for both backend and frontend services defined in the `docker-compose.yml` file. (Please wait until webpack has compiled successfully, sometimes Docker can take a while.)

4. **Accessing the Application**: Once the containers are up and running, you can access the application through your web browser:

    - **Backend**: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
    - **Frontend**:
      - Local: [http://localhost:3000](http://localhost:3000)
      - Or: [http://192.168.0.100:3000](http://192.168.0.100:3000)

    Docker will handle the compilation and execution of both backend and frontend services automatically.

## Directory Structure

The project directory structure is organized as follows:

```
web-app-react-django/
├── backend/
├── frontend/
└── docker-compose.yml
```
## Alternative Installation

Backend Installation

1. **Prerequisites**: Python 3 and pip required. Navigate to `backend` directory, activate virtual environment if desired, install dependencies with `pip install -r requirements.txt`, then run Django server with `python manage.py runserver`.

Frontend Installation

2. **Prerequisites**: Node.js and npm needed. Navigate to `frontend` directory and install dependencies with `npm install`, then start the development server using `npm start`.

- Django: 4.1.5
- Node.js: v20.11.1
- Python: 3.10.4
