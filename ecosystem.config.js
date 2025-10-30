module.exports = {
  apps: [{
    name: "my-app", 
    cwd: "/home/admin/actions-runner/_work/gitActions/gitActions",  
    script: "src/app.js",      
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production"
    }
  }]
}
