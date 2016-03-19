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