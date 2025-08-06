import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string = '';
  password:string = '';
  remember:boolean = false;

  handleLogin(){
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.remember);

    if (this.username && this.password) {
      alert('Login successful!');
    } else {
      alert('Please fill in all fields');
    }
  } 
}
