(function(){
  'use strict';

  angular.module('skills')
         .service('indexService', ['$q', indexService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function indexService($q){
    var skills1 = [
      {
        name: 'Educacion',
        avatar: 'svg-12',
        url: '#education',
        content: 'mi educacion Primaria Secundaria Preparatoria y Universidad'
      },
      {
        name: 'Skills',
        avatar: 'svg-11',
        url: '#skills',
        content: '(php info), i started using php as my first web lenguage its a relable scripting language i stop working with php because i needed somting new and diferent to evelop web apps i tried django as freamework for python  and ruby in ruby on rails and i decide to go with ruby.'
      },
      {
        name: 'Experience',
        avatar: 'svg-13',
        url: '#Experience',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'informacion',
        avatar: 'svg-14',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Galeria',
        avatar: 'svg-15',
        content: 'in construction'
      },
      {
        name: 'contact me',
        avatar: 'svg-16',
        content: "send a message"
      }
    ];


    // Promise-based API
    return {
      loadAllSkills : function() {
        // Simulate async nature of real remote calls
        return $q.when(skills1);
      }
    };
  }

})();
