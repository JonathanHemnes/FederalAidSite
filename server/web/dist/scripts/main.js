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
        .component('familySize', {
            bindings:{
                familySize: '='
            },
            templateUrl: './dist/templates/family-size.html',
            controllerAs: 'ctrl',
            controller: function(){
                let vm = this;
                vm.familySize = vm.totalFamilySize
            }
        })
})();
(function(){
    'use strict';
    angular
        .module('eligbl')
        .component('incomeSelector', {
            bindings:{
                annualIncome: '='
            },
            templateUrl: './dist/templates/income-selector.html',
            controllerAs: 'ctrl',
            controller: function(){
                let vm = this;
                vm.annualIncome = vm.income;
            }
        })
})();
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