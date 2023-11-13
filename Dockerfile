FROM node:20.9.0 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application for production
RUN npm run generate

# Use nginx to serve the static content
FROM nginx:alpine

# Copy the static content from builder stage to nginx's default directory
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80