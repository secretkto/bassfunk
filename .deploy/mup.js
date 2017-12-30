module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '95.85.61.141',
      // host: '188.166.73.11',
      username: 'root',
      // pem: 'C:\/Users\/USER\/.ssh\/id_rsa',
      password: '22914422h'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'bassfunk',
    path: 'C:\/Users\/USER\/Desktop\/meteor',

    servers: {
      one: {},
    },

    buildOptions: {
        // build with the debug mode on
        // debug: true,
        // mobile setting for cordova apps
        // executable used to build the meteor project
        // you can set a local repo path if needed
        executable: 'meteor',
      },


    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://bassfunk.moscow',
      // ROOT_URL: 'http://188.166.73.11',
      MONGO_URL: 'mongodb://localhost/meteor',
      METEOR_ENV: "production"
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma seperated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
      // imagePort: 80, // (default: 80, some images EXPOSE different ports)
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    // deployCheckWaitTime: 22,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};