# Use official Node.js image as base
FROM node:20-alpine3.18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as web server
FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
