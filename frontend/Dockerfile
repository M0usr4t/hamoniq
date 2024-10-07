# Use an official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend files
COPY . .

# Expose the port for the Vite dev server
EXPOSE 5173

# Command to start the Vite development server
CMD ["npm", "run", "dev"]

