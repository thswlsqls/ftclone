module.exports = {
    apps: [{
    name: 'app',
    script: 'express_server/index.js',
    instances: 2,
    exec_mode: 'cluster'
    }]
  }
