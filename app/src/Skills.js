(function(){
  'use strict';
  angular
  .module('skills', ['ngMaterial','ngRoute'])
  .config(function($mdThemingProvider,$mdIconProvider,$routeProvider){
      $mdIconProvider
        .defaultIconSet("/assets/svg/skills.svg", 128)
        .icon("menu"         ,"/assets/svg/menu.svg" ,24)
        .icon("ruby"         ,"/assets/svg/avatar.svg", 24)
        .icon("hangouts"         ,"/assets/svg/browser-html-coding.svg", 512)
        .icon("twitter"   ,"/assets/svg/window-javascript-coding.svg", 512)
        .icon("phone"         ,"/assets/svg/ruby.svg", 512);
        $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('red');
      $routeProvider
      //routes
      .when('/',{
        templateUrl : 'src/pages/index.html'
      })
      //route for skills page
      .when('/skills',{
        templateUrl : 'src/pages/skills.html'
      })
      .when('/education',{
        templateUrl : 'src/pages/education.html'
      });
  });

})();
