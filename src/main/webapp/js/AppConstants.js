/* 
 * DentoSysConstants
 * To be used to have all application level constants at one place.
 * These will be used through out the application
 * 
 * things to be included :
 * webservices, 
 * application configuration constants,
 * 
 */


angular.module('demoApp').constant('AppConstants', {
    'IS_PRINTING_LOG': true,
    'IS_SHOWING_ALERT': true,
    'REQUEST_TIME_OUT': 2000,


    'FAILURE_ID': "999",
    'SUCCESS_ID': "100"

    /*'LOGIN_URL': 'webresources/login',
    'GET_CALENDAR_SERVICE': 'webresources/calendar/getAppointments',
    'GET_CLINICAL_NOTE': 'webresources/clinicalNotes/getClinicalNotes',*/

});
