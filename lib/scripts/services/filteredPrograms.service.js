(function () {
    'use strict';
    angular
        .module('eligbl')
        .service('filteredPrograms', [filteredProgramService]);
    function filteredProgramService(){
        function getFilteredPrograms(){
            return [
                {
                    name: "Jonathan's Programs",
                    description: "this is definetely a real program",
                    website: "www.yomomma.com"
                },{
                    name: "Ely's Programs",
                    description: "this is definetely a real program234234234",
                    website: "www.yomomma2.com"
                }
            ]
        }
        function setFilteredPrograms(programs){
            this.filteredPrograms = programs;
        }
        return {
            getFilteredPrograms: getFilteredPrograms,
            setFilteredPrograms: setFilteredPrograms
        }
    }
})();