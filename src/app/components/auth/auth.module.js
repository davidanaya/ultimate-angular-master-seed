angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB0HEHm8WnAQxNeF7ctEvGiUaPjCGwD2Wk",
      authDomain: "contacts-manager-d5c92.firebaseapp.com",
      databaseURL: "https://contacts-manager-d5c92.firebaseio.com",
      storageBucket: "contacts-manager-d5c92.appspot.com",
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });
      
    firebase.initializeApp(config);
  });
