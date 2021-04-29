import Route from '@ember/routing/route';
import { myQuestions } from '../../data/sports';
export default class CategorySportsRoute extends Route {
  model(){
    const quiz = myQuestions;
    return quiz;
  }
}
