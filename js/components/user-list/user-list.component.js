angular.module('appUserListModule', [])
   .component('userListComponent', {
      templateUrl: './js/components/user-list/user-list.component.html',
      controller: 'userListController'
   })
   //Metodo 1
   // .controller('userListController', ['$http', function($http){
   //    var self = this;
   //    self.users;

   //    $http.get('https://jsonplaceholder.typicode.com/users')
   //       .then( function( resp ){
   //          console.log(resp);
   //          self.users = resp.data;
   //       })
   // } ])

   //Metodo 2 usando this
     .controller('userListController', ['$http', function($http){
     
      this.users;

      $http.get('https://jsonplaceholder.typicode.com/users')
         .then( (function( resp ){
            console.log(resp);
            this.users = resp.data;
         // console.log('que es this aqui',this);
         }).bind(this));
   } ])