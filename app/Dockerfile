# Use Node.js official image (latest LTS)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all files first
COPY . .

# Change to frontend directory
WORKDIR /app/frontend

# Install dependencies
RUN npm install

# Install react-router-dom
RUN npm install react-router-dom

# Expose the port that Vite dev server runs on
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]