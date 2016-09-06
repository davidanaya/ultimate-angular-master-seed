var authForm = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSumbit: '&'
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
}

angular
  .module('components.auth')
  .component('authForm', authForm);