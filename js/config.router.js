'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/modules/CountController.js',
                                                 'js/modules/service/CountService.js']);
                    }]
                  }
              })
              .state('app.grid', {
                  url: '/grid',
                  templateUrl: 'tpl/grid.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/modules/gridController.js',
                                                 'js/modules/service/gridService.js']);
                    }]
                  }
              })
              .state('app.grid2', {
                  url: '/grid2',
                  templateUrl: 'tpl/grid2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/modules/grid2Controller.js',
                                                 'js/modules/service/grid2Service.js']);
                    }]
                  }
              })
             
              .state('app.main', {
                  url: '/main',
                  templateUrl: 'tpl/main.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/modules/FloatchartController.js',
                                                 'js/modules/service/statisticsService.js']);
                    }]
                  }
                  
              })

              //set'
              .state('app.set', {
                  url: '/set',
                  template: '<div ui-view></div>'
              })
              .state('app.set.timeset', {
                  url: '/timeset',
                  templateUrl: 'tpl/set_timeset.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load(['js/controllers/modal/time_add.js']);
                      }]
                  }
              })
              .state('app.set.sys', {
                  url: '/setsys',
                  templateUrl: 'tpl/set_sys.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load(['js/controllers/modal/sys_add.js']);
                      }]
                  }
              })

              //man
              .state('app.man', {
                  url: '/man',
                  template: '<div ui-view></div>'
              })
              .state('app.man.manage', {
                  url: '/man_manage',
                  templateUrl: 'tpl/man_manage.html'
              })
              .state('app.man.police', {
                  url: '/man_police',
                  templateUrl: 'tpl/man_police.html'
              })
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              
              .state('app.table.gongjian', {
                  url: '/gongjian',
                  templateUrl: 'tpl/dianming/gongjian.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load(['js/modules/dianming/controller/gongjian_detail.js']);
                      }]
                  }
              })
           
    //！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！          
              .state('app.table.chugong', {
                  url: '/chugong',
                  templateUrl: 'tpl/dianming/chugong.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load(['js/modules/dianming/controller/chugongController.js',
                                                   'js/modules/dianming/service/chugongService.js']);
                      }]
                  }
              })


              .state('app.table.workin', {
                  url: '/workin',
                  templateUrl: 'tpl/dianming/workin.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load(['js/modules/dianming/controller/workin_detail.js',
                                                  'js/modules/dianming/service/workinService.js',
                                                  'js/modules/dianming/service/workinmodalService.js']);
                      }]
                  }
              })
             
              .state('app.table.alone', {
                  url: '/alone',
                  templateUrl: 'tpl/dianming/alone.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load(['js/modules/dianming/controller/alone_detail.js']);
                      }]
                  }
              })

              .state('app.table.jianshe', {
                  url: '/jianshe',
                  templateUrl: 'tpl/dianming/jianshe.html'
              })
              
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'tpl/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signin.js'] );
                      }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              })

              
      }
    ]
  );