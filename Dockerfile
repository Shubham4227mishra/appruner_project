# Use lightweight, secure Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first (layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy application source
COPY . .

# App Runner injects PORT automatically (commonly 8080)
EXPOSE 8080

# Start application
CMD ["npm", "start"]

