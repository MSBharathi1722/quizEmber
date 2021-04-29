import EmberRouter from '@ember/routing/router';
import config from 'quiz-ram/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {

  this.route('category', function() {
    this.route('index');
    this.route('sports');
    this.route('generalKnowledge');
    this.route('animals');
    this.route('computerScience');
  });
});
