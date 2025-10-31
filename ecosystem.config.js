module.exports = {
  apps: [{
    name: 'node-app',
    script: 'src/app.js', // or your main entry file
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    watch: false, // Disable watching in production
    max_memory_restart: '1G', // Restart if memory exceeds 1GB
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};