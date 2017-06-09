angular.module('appUserDetailModule', [])
   .component('userDetailComponent', {
      templateUrl: './js/components/user-detail/user-detail.component.html',
      controller: 'userDetailController',
      bindings: {
         //el igual indica que la propiedad se pasa por referencia, es decir que el onjeto del padre sera el mismo objeto que en el hijo
         // y que si cambia en el padre tambien lo hara en el hijo. Osea es un binding a 2 bandas twoWayBinding
         usuario:'=',
         // bindeo unidireccional de valor,
         numero: '@'
      }
   })
   .controller('userDetailController', [ function(){
      var self = this;

      self.cambiarEmail = function(){
         self.usuario.email = 'correo@ivandiazdiaz.com'
      }


   }])
  