(function () {
    'use strict';
    angular.module('eligbl', ['ui.bootstrap'])
        .directive('format', ['$filter', function ($filter) {
            return {
                require: '?ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    if (!ctrl) return;

                    ctrl.$formatters.unshift(function (a) {
                        return $filter(attrs.format)(ctrl.$modelValue)
                    });

                    elem.bind('blur', function (event) {
                        var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                        elem.val($filter(attrs.format)(plainNumber));
                    });
                }
            };
        }])
        .directive('numericOnly', function(){
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {

                modelCtrl.$parsers.push(function (inputValue) {
                    var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g,'') : null;

                    if (transformedInput!=inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    });
})();