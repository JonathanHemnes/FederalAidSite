(function(){
    'use strict';
    angular
        .module('eligbl')
        .component('person', {
            templateUrl: './dist/templates/person.html',
            controllerAs: 'ctrl',
            controller: function(){
                let vm = this;
                vm.children = [];
                vm.totalFamilySize = null;
                vm.income = null;
            }
        })
})();