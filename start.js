module.exports = {
    apps: [
      {
        name: 'frontend-client',
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 3700',
        instances: 1,
        exec_mode: 'cluster',
      },
    ],
  };