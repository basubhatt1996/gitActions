module.exports = {
  apps: [{
    name: "my-app",
    script: "src/app.js",   // or "app.js" / "server.js" depending on your entry file
    cwd: "/opt/app/actions-runner/_work/gitActions/gitActions",        // explicitly run from /opt/app
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production"
    }
  }]
}
