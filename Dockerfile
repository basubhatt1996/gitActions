FROM node:20-alpine

# Install PM2 globally
RUN npm install -g pm2

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY ecosystem.config.js ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Create logs directoryy
RUN mkdir -p logs

# Expose port
EXPOSE 5000

# Health check
#HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
 # CMD node -e "require('http').get('http://localhost:5000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Use PM2 runtime (recommended for containers)
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]