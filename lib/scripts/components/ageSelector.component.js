(function () {
    'use strict';
    angular
        .module('eligbl')
        .component('ageSelector', {
            templateUrl: './dist/templates/age-selector.html',
            controllerAs: 'ctrl',
            controller: function() {
                var vm = this;
                vm.selectedAges = [];
                vm.allowableAges = [];
                for (let i = 0; i < 20; ++i) {
                    vm.allowableAges.push(i);
                }
                vm.isActiveAge = function(age){
                    return vm.selectedAges.indexOf(age) !== -1 ? 'btn btn-success' : 'btn btn-default';
                };
                vm.toggle = function(age){
                    vm.selectedAges.indexOf(age) !== -1 ? vm.selectedAges.splice(vm.selectedAges.indexOf(age), 1) : vm.selectedAges.push(age);
                }
            }
        });
})();
