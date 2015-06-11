(function(){

  angular
       .module('skills')
       .config(function($mdIconProvider){
           $mdIconProvider
             .defaultIconSet("/app/assets/svg/skills.svg", 128);
       })
       .controller('IndexController', [
         'indexService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
         IndexController]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function IndexController( indexService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected     = null;
    self.skills        = [ ];
    self.userinfo      = [ ];
    self.selectskill   = selectSkill;
    self.toggleList   = toggleSkillsList;
    self.showContactOptions  = showContactOptions;

    // Load all registered users

    indexService
          .loadAllSkills()
          .then( function( skills ) {
            self.skills    = [].concat(skills);
            self.selected = skills[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleSkillsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectSkill (skill ){
      self.selected = angular.isNumber(skill) ? $scope.skills[skill] : skill;
      self.toggleList();
    }
    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var skill = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/skills/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {

          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.skill = skill;
          this.actions = [
            { name: 'Phone : +52 (044)6622996181'       , icon: 'phone' , icon_url: 'assets/svg/phone.svg', url: 'tel:+520446622996181'},
            { name: 'LinkedIn'    , icon: 'LinkedIn'    , icon_url: 'assets/svg/LinkedIn.svg', url: 'https://www.linkedin.com/profile/view?id=211968804'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg', url:'https://plus.google.com/100930541245819789330/posts'},
            { name: 'facebook'    , icon: 'facebook'    , icon_url: 'assets/svg/facebook.svg', url: 'https://www.facebook.com/danielosbaldovalenzuela'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
