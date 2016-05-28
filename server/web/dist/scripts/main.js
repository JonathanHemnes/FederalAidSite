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
            return vm.person.isPregnant ? 'btn btn-lg btn-success' : 'btn btn-lg btn-default';
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
(function () {
    'use strict';
    function programViewportController() {
        let vm = this;

    }

    angular
        .module('eligbl')
        .component('programViewport', {
            bindings: {
                currentProgram: '='
            },
            templateUrl: './dist/templates/program-viewport.html',
            controller: programViewportController,
            controllerAs: 'ctrl'
        })
})();
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
(function () {
    angular
        .module('eligbl')
        .service('submitter', ['$http', 'filteredPrograms', submitterService]);
    function submitterService($http, filteredPrograms){
        function submit(person){
            $http.post('/api/getFilteredPrograms', person)
            .then(result =>{
                console.log('found a result');
                console.log(result);
                filteredPrograms.setFilteredPrograms(result.data);
            });
        }
        return {
            submit: submit
        }
    }
})();