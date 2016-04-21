(function() {
    'use strict';

    angular
        .module('app')
        .constant('serverPath', '/api')
        .config(configure)
        .run(dataserviceTest);

    function configure(RestangularProvider, serverPath){
        RestangularProvider.setBaseUrl(serverPath);
    }

    /* @ngInject */
    function dataserviceTest(dataservice) {

        // // ------User------
        // dataservice.getUserList({
        //     filters : {
        //         fuzzy: 'c'
        //     }
        // }).then(function (data) {
        //     console.info("getUserList:", data)
        // });

        // dataservice.getUser(1).then(function(data){
        //     console.info('getUser:', data)
        // });

        // dataservice.addUser({
        //     username : 'zhangukeji',
        //     password : 'hehehe'
        // }).then(function(data){
        //     console.info('addUser:', data)
        // });

        // dataservice.deleteUser(1).then(function(data){
        //     console.info('deleteUser:', data)
        // });

        // dataservice.getUserList({}).then(function (data) {
        //     console.info("getUserList:", data)
        // });

        // dataservice.patchUser(5,{
        //     nickname   : 'caigege'
        // }).then(function (data) {
        //     console.info("patchUser:", data)
        // });
    }
})();
