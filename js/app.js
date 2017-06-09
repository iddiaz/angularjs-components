(function() {
   'use strict';

   angular.module('app', [
        'appHeaderModule',
        'appContadorModule',
        'appUserListModule',
        'appUserDetailModule'
   ])
      .controller('appController', [ function(){
         this.title = 'App works!';
      }])
})();