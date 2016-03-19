(function(){
    'use strict';
    angular
        .module('eligbl')
        .component('isPregnantSelector', {
            bindings:{
                dearGodWhy: '='
            },
            templateUrl: './dist/templates/is-pregnant-selector.html',
            controllerAs: 'ctrl',
            controller: function(){
                var vm = this;

            }
        })
})();