(function () {
    'use strict';
    angular
        .module('eligbl')
        .component('ageSelector', {
            template: [
                '<ul>',
                    '<li ng-repeat="age in ctrl.allowableAges">{{age}}</li>',
                '</ul>'
            ].join(''),
            controllerAs: 'ctrl',
            controller: function() {
                var vm = this;
                this.helloThingy = {name: "helloThingythinght"};
                this.allowableAges = [];
                for (let i = 0; i < 20; ++i) {
                    this.allowableAges.push(i);
                }
            }
        });
})();
