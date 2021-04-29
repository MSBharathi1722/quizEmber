import Route from '@ember/routing/route';
import { myQuestions } from '../../data/generalKnowledge';
export default class CategoryGeneralKnowledgeRoute extends Route {
  model(){
    const quiz = myQuestions;
    return quiz;
  }
}
