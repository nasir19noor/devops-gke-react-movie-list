# Dockerfile

# ---- Stage 1: Build the React application ----
# Use a specific Node.js version for reproducible builds
FROM node:20-alpine AS build

# Set the working directory for the entire build process
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for the root
# and for the frontend directory. This step is cached by Docker.
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Change to the frontend directory to install dependencies
WORKDIR /app/frontend
RUN npm install

# Copy the rest of your application source code
# Note: We are in /app/frontend, so we copy the frontend code.
# The Docker context should be the root of your project.
COPY frontend/ .

# Build the application for production.
# This creates a static 'dist' folder in /app/frontend/
RUN npm run build


# ---- Stage 2: Serve the application with Nginx ----
# Use a lightweight and official Nginx image
FROM nginx:1.25-alpine

# Copy our custom Nginx configuration file
# This file will tell Nginx how to handle SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the 'build' stage to the Nginx html directory
# This moves your static files (HTML, JS, CSS) to where Nginx can serve them
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Expose port 80, the default HTTP port Nginx listens on
EXPOSE 80

# Start Nginx in the foreground when the container launches
CMD ["nginx", "-g", "daemon off;"]
