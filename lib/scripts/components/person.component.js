(function(){
    'use strict';
    function personController(){
        let vm = this;
        vm.children = [];
        vm.totalFamilySize = null;
        vm.income = null;
        vm.submit = function(){
            $http.post()
        }
    }
    angular
        .module('eligbl')
        .component('person', {
            templateUrl: './dist/templates/person.html',
            controller: personController,
            controllerAs: 'ctrl'
        })
})();