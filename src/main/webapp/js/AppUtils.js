/* 
 * AppUtils
 * Utils class to contain all the utils functions, 
 * To be used through out the application.
 */

( function () {

    AppUtils.$inject = ['AppConstants', '$log'];

    function DSUtils(AppConstants , $log) {

        return {

            /**
             *
             * @returns true if internet available other wise returns false
             * check the values of navigator and return according to it.
             */
            isInternetAvailable: function () {
                if (navigator.network) {
                    var networkType = navigator.network.connection.type;
                    this.debugLog('Network type - ' + networkType, true);
                    if (networkType && networkType != "none") {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return navigator.onLine;
                }
            },

            /**
             * show and hide loader as per demand
             */
            showLoader: function (text) {
               $(".loading-container").show();
                if(text != undefined){
                    $(".loadertext").html(text);
                }else{
                    $(".loadertext").html("Just a minute...");
                }


            },
            hideLoader: function () {
                $(".loading-container").hide();
            },

            /**
             * console log used for debugging can be on of during call or globally
             * @param logData - log text to print
             * @param isPrinting - flag, if log is going to print or not true to print false to not print
             * @constructor
             */
            debugLog: function (logData, isPrinting) {

                if (AppConstants.IS_PRINTING_LOG && isPrinting) {
                    if (typeof logData === 'object') {
                        $log.debug('>>>>>>>>>>>>> MY APP Logs ->>> ' + JSON.stringify(logData));
                    } else {
                        $log.debug('>>>>>>>>>>>>> MY APP Logs ->>> ' + logData);
                    }

                }
            },

            /**
             * window alert used for debugging can be on of during call or globally
             * @param alertData - log text to show alert
             * @param isShowing - flag, if alert is going to print or not true to print false to not print
             * @constructor
             */
            debugAlert: function (alertData, isShowing) {
                if (WFConstants.IS_SHOWING_ALERT && isShowing) {
                    alert('APP Alert - ' + alertData);
                }
            },


            /**
             * return date with time factor cleared
             * @param date
             * @returns {Date}
             */
            getFiltedDateWithNoTime : function(date){
                var newDate = new Date(date);
                newDate.setHours(0,0,0,0);
                return newDate;
            },


            getTitleCaseString : function(string){
                 return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            },


            getKeyFromValue : function(array , text){
                $.each(array, function(key, value) {
                    if(text == value){
                        return key;
                    }
                });
            },

            convertToDigit : function(str , max){
                str = str.toString();
                return str.length < max ? this.convertToDigit("0" + str, max) : str;
            },



            showSuccessToast:function(title,message){
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-bottom-right",
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "4000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.success(message,title);
            },

            showInfoToast:function(title,message){
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-bottom-right",
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "4000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.info(message,title);
            },

            showWarningToast:function(title,message){
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-bottom-right",
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "4000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.warning(message,title);
            },

            showErrorToast:function(title,message){
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-bottom-right",
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "4000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.error(message,title);
            },


            /**
             * validates data by making them title case and removing extra spaces.
             * @param data
             */
            validateNrectifyData : function(data){
                for (var key in data){
                    var value = data[key];
                    if(typeof value != "boolean"){
                        var trimmedString = value.replace(/\s+/g,' ').trim();
                        var titleCasedString = this.getTitleCaseString(trimmedString);
                        data[key] = titleCasedString;
                    }
                }
                return data;
            }

        };
    }

    angular.module('demoApp').service('AppUtils', AppUtils);

}());