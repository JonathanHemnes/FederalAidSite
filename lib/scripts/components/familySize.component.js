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