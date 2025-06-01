# Use official Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port (Render will override it but it's good practice)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]

