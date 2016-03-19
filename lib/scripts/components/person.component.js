(function(){
    'use strict';
    function personController(submitter){
        let vm = this;
        vm.person = {};
        vm.person.children = [];
        vm.person.totalFamilySize = null;
        vm.person.income = null;
        vm.submit = function(){
            submitter.submit(vm.person)
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