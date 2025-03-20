#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

echo "Building Docker image..."
docker build -t nrael-react-app .

echo "Running Docker container on port $PORT..."
docker run -p $PORT:80 nrael-react-app
