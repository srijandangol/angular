import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularCounterApp';

  count: number = 0
  // handleIncrement(){
  //   this.count += 1
  // }
  // handleDecrement(){
  //   this.count -= 1
  // }
  // handleReset(){
  //   this.count = 0 
  // }

  handleCount(val:string){
    if(val == 'minus'){
      this.count -= 1
    } else if(val == 'plus'){
      this.count += 1
    }else{
      this.count = 0
    }
  }
}

