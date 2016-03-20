(function () {
    'use strict';
    angular
        .module('eligbl')
        .service('filteredPrograms', [filteredProgramService]);
    function filteredProgramService(){

        function setFilteredPrograms(programs){
            this.filteredPrograms = programs;
        }
        return {
            setFilteredPrograms: setFilteredPrograms
        }
    }
})();