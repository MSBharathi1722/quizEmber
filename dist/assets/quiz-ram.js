'use strict';



;define("quiz-ram/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("quiz-ram/app", ["exports", "ember-resolver", "ember-load-initializers", "quiz-ram/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("quiz-ram/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("quiz-ram/components/quiz-questions", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
    <h1>The Quiz</h1>
    <div class="container">
      <div class="disp-Qns">
        <h2>{{this.temp.question}}</h2>
      </div>
      <div class="disp-Ans">
        {{#each this.temp.answers as |item|}}
          {{!-- template-lint-disable require-input-label --}}
          <input class="ans_button" type="button" value={{item}}  {{on 'click' (fn this.start item)}}/>
        {{/each}}
        <h1>Score:{{this.score}}</h1>
      </div>
      <div class="score"><h2>
        {{#if this.finished}}
              <h2>You have Scored {{this.score}}/100</h2>
              <LinkTo id="playAgain" @route="category">Play Again?</LinkTo>
        {{/if}}
      </h2></div>
    </div>
  
  */
  {
    "id": "fRJWivrJ",
    "block": "[[[1,\"\\n  \"],[10,\"h1\"],[12],[1,\"The Quiz\"],[13],[1,\"\\n  \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"disp-Qns\"],[12],[1,\"\\n      \"],[10,\"h2\"],[12],[1,[30,0,[\"temp\",\"question\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"disp-Ans\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"temp\",\"answers\"]]],null]],null],null,[[[1,\"        \"],[11,\"input\"],[24,0,\"ans_button\"],[16,2,[30,1]],[24,4,\"button\"],[4,[38,2],[\"click\",[28,[37,3],[[30,0,[\"start\"]],[30,1]],null]],null],[12],[13],[1,\"\\n\"]],[1]],null],[1,\"      \"],[10,\"h1\"],[12],[1,\"Score:\"],[1,[30,0,[\"score\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"score\"],[12],[10,\"h2\"],[12],[1,\"\\n\"],[41,[30,0,[\"finished\"]],[[[1,\"            \"],[10,\"h2\"],[12],[1,\"You have Scored \"],[1,[30,0,[\"score\"]]],[1,\"/100\"],[13],[1,\"\\n            \"],[8,[39,5],[[24,1,\"playAgain\"]],[[\"@route\"],[\"category\"]],[[\"default\"],[[[[1,\"Play Again?\"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[\"item\"],false,[\"each\",\"-track-array\",\"on\",\"fn\",\"if\",\"link-to\"]]",
    "moduleName": "quiz-ram/components/quiz-questions.hbs",
    "isStrictMode": false
  });

  let QuizQuestionsComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._action, (_class = class QuizQuestionsComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "num", _descriptor2, this);

      _initializerDefineProperty(this, "temp", _descriptor3, this);

      _initializerDefineProperty(this, "score", _descriptor4, this);

      _initializerDefineProperty(this, "finished", _descriptor5, this);
    }

    start(ans) {
      if (this.num <= 9) {
        if (ans === this.args.data[this.num].correctAnswer) {
          this.score += 10;
          this.num++;
          this.temp = this.args.data[this.num];

          if (this.num == 10) {
            this.finished = true;
          }
        } else {
          this.num++;
          this.temp = this.args.data[this.num];

          if (this.num == 10) {
            this.finished = true;
          }
        }
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "num", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "temp", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.data[this.num];
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "score", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "finished", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "start", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype)), _class));
  _exports.default = QuizQuestionsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, QuizQuestionsComponent);
});
;define("quiz-ram/components/result", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  */
  {
    "id": "m8nAjXCY",
    "block": "[[],[],false,[]]",
    "moduleName": "quiz-ram/components/result.hbs",
    "isStrictMode": false
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("quiz-ram/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("quiz-ram/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("quiz-ram/data/animal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.myQuestions = void 0;
  const myQuestions = [{
    question: "Cashmere is the wool from which kind of animal?",
    answers: ["Goat", "Sheep", "Camel", "Llama"],
    correctAnswer: "Goat"
  }, {
    question: "What is the scientific name for the &quot;Polar Bear&quot;?",
    answers: ["Ursus Arctos", "Ursus Maritimus", "Polar Bear", "Ursus Spelaeus"],
    correctAnswer: "Ursus Maritimus"
  }, {
    question: "For what reason would a spotted hyena &quot;laugh&quot;?",
    answers: ["Nervousness", "Aggression", "Exhaustion", "Excitement"],
    correctAnswer: "Nervousness"
  }, {
    question: "The now extinct species &quot;Thylacine&quot; was native to where?",
    answers: ["Oregon, United States", "Wallachia, Romania", "Tasmania, Australia", "Baluchistan, Pakistan"],
    correctAnswer: "Tasmania, Australia"
  }, {
    question: "What is the name of the family that the domestic cat is a member of?",
    answers: ["Cat", "Felinae", "Felidae", "Felis"],
    correctAnswer: "Felidae"
  }, {
    question: "What is the world's longest venomous snake?",
    answers: ["King Cobra", "Green Anaconda", "Inland Taipan", "Yellow Bellied Sea Snake"],
    correctAnswer: "King Cobra"
  }, {
    question: "What is the collective noun for rats?",
    answers: ["Pack", "Race", "Mischief", "Drift"],
    correctAnswer: "Mischief"
  }, {
    question: "What is the scientific name of the Common Chimpanzee?",
    answers: ["Pan paniscus", "Pan troglodytes", "Gorilla", "Panthera leo"],
    correctAnswer: "Pan troglodytes"
  }, {
    question: "What is the name for a male bee that comes from an unfertilized egg?",
    answers: ["Drone", "Soldier", "Soldier", "Male"],
    correctAnswer: "Drone"
  }, {
    question: "The dish Fugu, is made from what family of fish?",
    answers: ["Salmon", "Bass", "Mackerel", "Pufferfish"],
    correctAnswer: "Pufferfish"
  }];
  _exports.myQuestions = myQuestions;
});
;define("quiz-ram/data/computers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.myQuestions = void 0;
  const myQuestions = [{
    question: "What amount of bits commonly equals one byte?",
    answers: ["1", "2", "8", "64"],
    correctAnswer: "8"
  }, {
    question: "In any programming language, what is the most common way to iterate through an array?",
    answers: ["'For' loops", "'If' Statements", "'Do-while' loops", "'While' loops"],
    correctAnswer: "'For' loops"
  }, {
    question: "What does the 'MP' stand for in MP3?",
    answers: ["Moving Picture", "Music Player", "Multi Pass", "Micro Point"],
    correctAnswer: "Moving Picture"
  }, {
    question: "What does the computer software acronym JVM stand for?",
    answers: ["Java Visual Machine", "Just Virtual Machine", "Java Virtual Machine", "Java Vendor Machine"],
    correctAnswer: "Java Virtual Machine"
  }, {
    question: "How long is an IPv6 address?",
    answers: ["8 bits", "32 bits", "64 bits", "128 bits"],
    correctAnswer: "128 bits"
  }, {
    question: "The numbering system with a radix of 16 is more commonly referred to as  ",
    answers: ["Octal", "Binary", "Duodecimal", "Hexidecimal"],
    correctAnswer: "Hexidecimal"
  }, {
    question: "Which computer language would you associate Django framework with?",
    answers: ["C#", "C++", "Python", "Java"],
    correctAnswer: ""
  }, {
    question: "In 'Hexadecimal', what color would be displayed from the color code? '#00FF00' ?",
    answers: ["Green", "Red", "Blue", "Yellow"],
    correctAnswer: "Green"
  }, {
    question: "In web design, what does CSS stand for?",
    answers: ["Counter Strike: Source", "Computer Style Sheet", "Cascading Style Sheet", "Corrective Style Sheet"],
    correctAnswer: "Cascading Style Sheet"
  }, {
    question: "If you were to code software in this language you'd only be able to type 0's and 1's.",
    answers: ["Pyton", "Binary", "C++", "JavaScript"],
    correctAnswer: "Binary"
  }];
  _exports.myQuestions = myQuestions;
});
;define("quiz-ram/data/generalKnowledge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.myQuestions = void 0;
  const myQuestions = [{
    question: "What name represents the letter 'M' in the NATO phonetic alphabet?",
    answers: ["Mike", "Matthew", "Mark", "Max"],
    correctAnswer: "Mike"
  }, {
    question: "Who is a co-founder of music streaming service Spotify?",
    answers: ["Sean Parker", "Felix Miller", "Michael Breidenbruecker", "Daniel Ek"],
    correctAnswer: "Daniel Ek"
  }, {
    question: "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
    answers: ["Fiat", "Maserati", "Alfa Romeo", "Ferrari"],
    correctAnswer: "Fiat"
  }, {
    question: "What is the German word for 'spoon' ?",
    answers: ["L&ouml;ffel", "Essst&auml;bchen", "Messer", "Gabel"],
    correctAnswer: "L&ouml;ffel"
  }, {
    question: "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
    answers: ["USA", "India", "Soviet Union", "Poland"],
    correctAnswer: "India"
  }, {
    question: "The term 'scientist' was coined in which year?",
    answers: ["1833", "1942", "1887", "1906"],
    correctAnswer: "1833"
  }, {
    question: "When did the website 'Facebook' launch?",
    answers: ["2003", "2004", "2005", "2006"],
    correctAnswer: "2004"
  }, {
    question: "Where did the pineapple plant originate?",
    answers: ["Asia", "Europe", "Hawaii", "South America"],
    correctAnswer: "South America"
  }, {
    question: "What was Mountain Dew's original slogan?",
    answers: ["Yahoo! Mountain Dew... It'll tickle your innards!", "Give Me A Dew", "Do The Dew", "Get That Barefoot Feeling, Mountain Dew"],
    correctAnswer: "Yahoo! Mountain Dew... It'll tickle your innards!"
  }, {
    question: "What was the name given to Japanese military dictators who ruled the country through the 12th and 19th Century?",
    answers: ["Shinobi", "Samurai", "Ninja", "Shogun"],
    correctAnswer: "Shogun"
  }];
  _exports.myQuestions = myQuestions;
});
;define("quiz-ram/data/quesions", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.myQuestions = void 0;
  const myQuestions = [{
    id: 1,
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich"
  }, {
    id: 2,
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "TypeScript", "npm"],
    correctAnswer: "npm"
  }, {
    id: 3,
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: "ESLint"
  }, {
    id: 4,
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich"
  }, {
    id: 5,
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "TypeScript", "npm"],
    correctAnswer: "npm"
  }, {
    id: 6,
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "ESLint"],
    correctAnswer: "ESLint"
  }];
  _exports.myQuestions = myQuestions;
});
;define("quiz-ram/data/sports", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.myQuestions = void 0;
  const myQuestions = [{
    question: "Who won the 2011 Stanley Cup?",
    answers: ["New York Rangers", "Toronto Maple Leafs", "Boston Bruins", "Montreal Canadiens"],
    correctAnswer: "Boston Bruins"
  }, {
    question: "What is the name of the AHL affiliate of the Toronto Maple Leafs?",
    answers: ["Toronto Marlies", "Toronto Rock", "Toronto Argonauts", "Toronto Wolfpack"],
    correctAnswer: "Toronto Marlies"
  }, {
    question: "Who won the 'Champions League' in 1999?",
    answers: ["Manchester United", "Bayern Munich", "Liverpool", "Barcelona"],
    correctAnswer: "Manchester United"
  }, {
    question: "Why was The Green Monster at Fenway Park was originally built?",
    answers: ["To display advertisements.", "To provide extra seating.", "To display advertisements.", "To prevent viewing games from outside the park."],
    correctAnswer: "To prevent viewing games from outside the park."
  }, {
    question: "How many French Opens did Bjorn Borg win?",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  }, {
    question: "What is Tiger Wood's all-time best career golf-score?",
    answers: ["61", "62", "63", "64"],
    correctAnswer: "61"
  }, {
    question: "What is the oldest team in Major League Baseball?",
    answers: ["Chicago Cubs", "Atlanta Braves", "Cincinnati Reds", "St. Louis Cardinals"],
    correctAnswer: "Atlanta Braves"
  }, {
    question: "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
    answers: ["Scuderia Ferrari", "Red Bull Racing Renault", "Mercedes-AMG Petronas", "McLaren Honda"],
    correctAnswer: "Mercedes-AMG Petronas"
  }, {
    question: "he F1 season of 1994 is remembered for what tragic event?",
    answers: ["Verstappen on Fire (Germany)", "Death of Ayrton Senna (San Marino)", "The Showdown (Australia)", "Schumacher's Ban (Britain)"],
    correctAnswer: "Death of Ayrton Senna (San Marino)"
  }, {
    question: "What national team won the 2016 edition of UEFA European Championship?",
    answers: ["Portugal", "France", "Germany", "England"],
    correctAnswer: "Portugal"
  }];
  _exports.myQuestions = myQuestions;
});
;define("quiz-ram/helpers/app-version", ["exports", "quiz-ram/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("quiz-ram/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("quiz-ram/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("quiz-ram/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("quiz-ram/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("quiz-ram/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "quiz-ram/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("quiz-ram/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("quiz-ram/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("quiz-ram/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("quiz-ram/initializers/export-application-global", ["exports", "quiz-ram/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("quiz-ram/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("quiz-ram/router", ["exports", "quiz-ram/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('category', function () {
      this.route('index');
      this.route('sports');
      this.route('generalKnowledge');
      this.route('animals');
      this.route('computerScience');
    });
  });
});
;define("quiz-ram/routes/category", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CategoryRoute extends Ember.Route {}

  _exports.default = CategoryRoute;
});
;define("quiz-ram/routes/category/animals", ["exports", "quiz-ram/data/animal"], function (_exports, _animal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CategoryAnimalsRoute extends Ember.Route {
    model() {
      const quiz = _animal.myQuestions;
      return quiz;
    }

  }

  _exports.default = CategoryAnimalsRoute;
});
;define("quiz-ram/routes/category/computer-science", ["exports", "quiz-ram/data/computers"], function (_exports, _computers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CategoryComputerScienceRoute extends Ember.Route {
    model() {
      const quiz = _computers.myQuestions;
      return quiz;
    }

  }

  _exports.default = CategoryComputerScienceRoute;
});
;define("quiz-ram/routes/category/general-knowledge", ["exports", "quiz-ram/data/generalKnowledge"], function (_exports, _generalKnowledge) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CategoryGeneralKnowledgeRoute extends Ember.Route {
    model() {
      const quiz = _generalKnowledge.myQuestions;
      return quiz;
    }

  }

  _exports.default = CategoryGeneralKnowledgeRoute;
});
;define("quiz-ram/routes/category/sports", ["exports", "quiz-ram/data/sports"], function (_exports, _sports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CategorySportsRoute extends Ember.Route {
    model() {
      const quiz = _sports.myQuestions;
      return quiz;
    }

  }

  _exports.default = CategorySportsRoute;
});
;define("quiz-ram/routes/err", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ErrRoute extends Ember.Route {}

  _exports.default = ErrRoute;
});
;define("quiz-ram/routes/result", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ResultRoute extends Ember.Route {}

  _exports.default = ResultRoute;
});
;define("quiz-ram/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("quiz-ram/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("quiz-ram/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("quiz-ram/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("quiz-ram/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("quiz-ram/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("quiz-ram/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rL7SHZ8X",
    "block": "[[[10,0],[14,0,\"display\"],[12],[1,\"\\n  \"],[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"],[13]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "quiz-ram/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/category", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "B2YWYFKM",
    "block": "[[[46,[28,[37,1],null,null],null,null,null]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "quiz-ram/templates/category.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/category/animals", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Jz+/y1dA",
    "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"model\"]]]],null]],[],false,[\"quiz-questions\"]]",
    "moduleName": "quiz-ram/templates/category/animals.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/category/computer-science", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xj5e/WGo",
    "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"model\"]]]],null]],[],false,[\"quiz-questions\"]]",
    "moduleName": "quiz-ram/templates/category/computer-science.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/category/general-knowledge", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hOgCcgjs",
    "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"model\"]]]],null]],[],false,[\"quiz-questions\"]]",
    "moduleName": "quiz-ram/templates/category/general-knowledge.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/category/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HtxlpsWt",
    "block": "[[[10,0],[14,1,\"categoryPage\"],[12],[1,\"\\n  \"],[10,\"h1\"],[12],[1,\"Select a category to play\"],[13],[1,\"\\n\\n    \"],[8,[39,0],[[24,0,\"LinkTo\"]],[[\"@route\"],[\"category.sports\"]],[[\"default\"],[[[[1,\"Sports\"]],[]]]]],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[8,[39,0],[[24,0,\"LinkTo\"]],[[\"@route\"],[\"category.generalKnowledge\"]],[[\"default\"],[[[[1,\"General Knowledge\"]],[]]]]],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[8,[39,0],[[24,0,\"LinkTo\"]],[[\"@route\"],[\"category.animals\"]],[[\"default\"],[[[[1,\"Animals\"]],[]]]]],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[8,[39,0],[[24,0,\"LinkTo\"]],[[\"@route\"],[\"category.computerScience\"]],[[\"default\"],[[[[1,\"Computer Science\"]],[]]]]],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "quiz-ram/templates/category/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/category/sports", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qbOlvvuv",
    "block": "[[[8,[39,0],null,[[\"@data\"],[[30,0,[\"model\"]]]],null]],[],false,[\"quiz-questions\"]]",
    "moduleName": "quiz-ram/templates/category/sports.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/err", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YwISGaX5",
    "block": "[[[10,\"h1\"],[12],[1,\"Err\"],[13]],[],false,[]]",
    "moduleName": "quiz-ram/templates/err.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dbSrR48Z",
    "block": "[[[8,[39,0],[[24,1,\"playbtn\"]],[[\"@route\"],[\"category.index\"]],[[\"default\"],[[[[1,\"Play?\"]],[]]]]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "quiz-ram/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/templates/result", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ctEpagB4",
    "block": "[[[8,[39,0],null,null,null],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"result\",\"component\",\"-outlet\"]]",
    "moduleName": "quiz-ram/templates/result.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("quiz-ram/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("quiz-ram/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("quiz-ram/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("quiz-ram/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('quiz-ram/config/environment', [], function() {
  var prefix = 'quiz-ram';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("quiz-ram/app")["default"].create({"name":"quiz-ram","version":"0.0.0"});
          }
        
//# sourceMappingURL=quiz-ram.map
