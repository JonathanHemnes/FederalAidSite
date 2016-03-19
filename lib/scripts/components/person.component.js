(function(){
    'use strict';
    function personController(submitter){
        let vm = this;
        vm.person = {};
        vm.person.isPregnant = false;
        vm.person.children = [];
        vm.person.totalFamilySize = null;
        vm.person.income = null;
        vm.getIsPregnantClass = function(){
            return vm.person.isPregnant ? 'btn btn-success' : 'btn btn-default';
        };
        vm.toggleIsPregnant = function(){
            vm.person.isPregnant = !vm.person.isPregnant;
        };
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