(function() {
   'use strict';

   angular.module('app', [
        'appHeaderModule',
        'appContadorModule'
   ])
      .controller('appController', [ function(){
         this.title = 'App works!';
      }])
})();