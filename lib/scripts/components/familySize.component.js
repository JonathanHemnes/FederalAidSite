(function(){
    'use strict';
    angular
        .module('eligbl')
        .component('familySize', {
            bindings:{
                familySize: '='
            },
            templateUrl: './dist/templates/family-size.html',
            controllerAs: 'ctrl',
            controller: function(){
                let vm = this;
                vm.familySize = vm.totalFamilySize
            }
        })
})();