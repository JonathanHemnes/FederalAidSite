(function(){
    'use strict';
    function filteredProgramsController(filteredPrograms){
        let vm = this;
        vm.getFilteredPrograms = () => {
            return filteredPrograms.filteredPrograms;
        }
    }
    angular
        .module('eligbl')
        .component('filteredPrograms', {
            templateUrl: './dist/templates/filtered-programs.html',
            controller: filteredProgramsController,
            controllerAs: 'ctrl'
        })
})();