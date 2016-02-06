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