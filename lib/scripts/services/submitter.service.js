(function () {
    angular
        .module('eligbl')
        .service('submitter', ['$http', 'filteredPrograms', submitterService]);
    function submitterService($http, filteredPrograms){
        function submit(person){
            $http.post('http://localhost:8080/api/getFilteredPrograms', person)
            .then(result =>{
                filteredPrograms.setFilteredPrograms(result.data.filteredPrograms);
            });
        }
        return {
            submit: submit
        }
    }
})();