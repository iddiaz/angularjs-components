angular.module('appContadorModule', [])
   .controller('contadorController', [ function(){
      //this es el $ctrl
      this.click = 0;

      this.incrementar = function (){
         this.click++;
      }
      
      //usando vm como refencia
      // var vm = this;
      // vm.click = 0;
      
      // vm.incrementar = function() {
      //    vm.click++;
      // }

   }])
   .component('contadorComponent', {
      templateUrl: './js/components/contador/contador.component.html',
      controller: 'contadorController',
      //controllerAs: Para en lugar de usar $ctrl como binding en la plantilla html usar un alias, ejemplo: {{contador.click}}
      
     
   })
   