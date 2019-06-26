import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/my.service';

@Component({
  selector: 'app-reward-system',
  templateUrl: './reward-system.component.html',
  styleUrls: ['./reward-system.component.scss']
})
export class RewardSystemComponent implements OnInit {
table:any=[]
data:any;
  constructor(private service:MyService) { }

  ngOnInit() {
    this.service.getreward(1)
    .subscribe(res=>{
      this.data=res;
      if(this.data.status==200){
        this.table=this.data.result
      }
      
    })
  }

}
