(function(){
  'use strict';

  angular.module('skills')
         .service('skillService', ['$q', skillService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function skillService($q){
    var skills1 = [
      {
        name: 'Ruby',
        avatar: 'svg-1',
        content: '(ruby info), i have been working with ruby for 1 year 6 monts and its been grate meinly working on ruby on rails the web framework'
      },
      {
        name: 'php',
        avatar: 'svg-2',
        content: '(php info), i started using php as my first web lenguage its a relable scripting language i stop working with php because i needed somting new and diferent to evelop web apps i tried django as freamework for python  and ruby in ruby on rails and i decide to go with ruby.'
      },
      {
        name: 'c#',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'HTML',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'CSS',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'JavaScript',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      },
      {
        name: 'TDD rspec,jasmine,selenium',
        avatar: 'svg-7',
        content: 'some stuff about testing'
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
