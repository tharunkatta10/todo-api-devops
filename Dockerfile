# 1. Use official Node.js image from Docker Hub
FROM node:18

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose port 3000 to outside world
EXPOSE 3000

# 7. Start the Node.js app
CMD ["npm", "start"]
