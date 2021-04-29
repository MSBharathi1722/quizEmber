import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class QuizQuestionsComponent extends Component {
    @service router;
    @tracked num = 0;
    @tracked temp = this.args.data[this.num];
    @tracked score=0;
    @tracked finished=false;
    @action
    start(ans){
        if (this.num<=9) {
            if(ans===this.args.data[this.num].correctAnswer){
              this.score+=10;
              this.num++;
              this.temp = this.args.data[this.num];
              if(this.num == 10){
                this.finished=true;
              }
            }else{
              this.num++;
              this.temp = this.args.data[this.num];
              if(this.num == 10){
                this.finished=true;
              }
            }
        }
    }
}
