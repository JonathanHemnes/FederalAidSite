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