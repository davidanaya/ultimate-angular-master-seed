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
  })
  .run(function($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function() {
          return $state.target('auth.login');
        });
    });
     $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
