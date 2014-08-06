'use strict';

/* Directives */


angular.module('demoApp.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, element, attrs) {
        element.text(version);
    };
  }])
  .directive('contenteditable', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl){
                //view -> model
                element.bind('blur',function(){
                    scope.$apply(function(){
                        ctrl.$setViewValue(element.html());
                    })
                });

                //model -> view
                ctrl.$render = function(){
                    element.html(ctrl.$viewValue);
                };

                //load init value from DOM
                ctrl.$render();
            }
        };
  })


/* Jquery Date Picker Directive */
.directive('myDatepicker', function() {
        return {
            restrict: "AE",
            require: "ngModel",
            link: function (scope, elem, attrs, ngModelCtrl) {
                var updateModel = function (dateText) {
                    scope.$apply(function () {
                        ngModelCtrl.$setViewValue(dateText);
                    });
                };
                var options = {
                    dateFormat: "dd/mm/yy",
                    onSelect: function (dateText) {
                        updateModel(dateText);
                    }
                };
                elem.datepicker(options);
            }
        }
})

/* Jquery Tabs Directive */
.directive('myTabs', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var jqueryElm = $(elm[0]);
            $(jqueryElm).tabs();
        }
    };
})

/* JQuery Accordion */
.directive('myAccordion', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var jqueryElm = $(elm[0]);
            $(jqueryElm).accordion();
        }
    };
})
;
