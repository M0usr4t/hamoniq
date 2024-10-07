# Use an official Node.js image
FROM node:20

# Install Python alongside Node.js
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Create a virtual environment in the container
RUN python3 -m venv /backend/python/.venv

# Install dependencies inside the virtual environment
RUN /bin/bash -c "source /backend/python/.venv/bin/activate && pip install -r /backend/python/requirements.txt"

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend files
COPY . .

# Expose the port the backend will run on
EXPOSE 3000

# Command to start the backend server
CMD ["npm", "start"]
