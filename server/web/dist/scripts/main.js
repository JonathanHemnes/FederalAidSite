(function () {
    'use strict';
    angular.module('eligbl', []);
})();
(function () {
    'use strict';
    angular
        .module('eligbl')
        .component('ageSelector', {
            bindings: {
                children: '='
            },
            templateUrl: './dist/templates/age-selector.html',
            controllerAs: 'ctrl',
            controller: function () {
                var vm = this;
                vm.allowableAges = [];
                populateAllowableAges();

                vm.isActiveAge = function (age) {
                    return vm.children.indexOf(age) !== -1 ? 'btn btn-success' : 'btn btn-default';
                };

                vm.toggle = function (age) {
                    vm.children.indexOf(age) !== -1 ? vm.children.splice(vm.children.indexOf(age), 1) : vm.children.push(age);
                };

                function populateAllowableAges() {
                    for (let i = 0; i < 20; ++i) {
                        vm.allowableAges.push(i);
                    }
                }
            }
        });
})();

(function(){
    'use strict';
    angular
        .module('eligbl')
        .component('familySizeSelector', {
            bindings:{
                berjibbers: '='
            },
            templateUrl: './dist/templates/family-size.html',
            controllerAs: 'ctrl',
            controller: function(){
            }
        })
})();
(function(){
    'use strict';
    angular
        .module('eligbl')
        .component('incomeSelector', {
            bindings:{
                income: '='
            },
            templateUrl: './dist/templates/income-selector.html',
            controllerAs: 'ctrl',
            controller: function(){
            }
        })
})();
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
(function () {
    angular
        .module('eligbl')
        .service('submitter', ['$http', 'filteredPrograms', submitterService]);
    function submitterService($http, filteredPrograms){
        function submit(person){
            $http.post('http://localhost:8080/api/getFilteredPrograms', person)
            .then(result =>{
                console.log(result);
                filteredPrograms.setFilteredPrograms(result);
            });
        }
        return {
            submit: submit
        }
    }
})();