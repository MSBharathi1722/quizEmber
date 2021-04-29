import Route from '@ember/routing/route';
import { myQuestions } from '../../data/animal';
export default class CategoryAnimalsRoute extends Route {
  model(){
    const quiz = myQuestions;
    return quiz;
  }
}
