import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/my.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
table:any;
  constructor(private myservice:MyService) { }

  ngOnInit() {
    this.myservice.userdetail()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    })
  }

}
