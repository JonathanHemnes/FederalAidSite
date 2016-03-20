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