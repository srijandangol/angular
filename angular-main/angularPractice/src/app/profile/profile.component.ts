import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userName: string | null='';
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    this.userName = this.route.snapshot.paramMap.get('name');
    console.log(this.userName)

  }
}
