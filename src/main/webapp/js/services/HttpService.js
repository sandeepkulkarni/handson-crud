(function () {

    HttpService.$inject = ['AppUtils', 'AppConstants', '$http' , '$log'];

    function HttpService(AppUtils, AppConstants, $http, $log) {
        return {
            /**
             * To be used to call service, following will be input params
             * @param {type} url - service url
             * @param {type} methodType - get, jsonp, post
             * @param {type} requestParameters
             * @param {type} httpBody
             * @param {type} isAsync
             * @param {type} timeOut- service timeout
             * @param {type} successCallBack - success callback method for the request
             * @param {type} errorCallBack - error callback method for the request
             * @param {type} requestIdentifier
             * @returns {undefined}
             */
            getDataFromServer: function (url, methodType, requestParameters, httpBody, isAsync, timeOut, successCallBack, errorCallBack, requestIdentifier) {

                $http({
                    method: "POST",
                    url: url,
                    data: requestParameters ? requestParameters : "",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status) {
                    successCallBack(data, requestIdentifier);
                }).error(function (data, status) {
                    errorCallBack({"status": status, "statusText": "Some Error Occurred."}, requestIdentifier)
                });

            }
        }
    }

    angular.module('demoApp').service('HttpService', HttpService);

}());