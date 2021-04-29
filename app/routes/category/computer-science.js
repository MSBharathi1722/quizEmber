import Route from '@ember/routing/route';
import { myQuestions } from '../../data/computers';
export default class CategoryComputerScienceRoute extends Route {
  model(){
    const quiz = myQuestions;
    return quiz;
  }
}
