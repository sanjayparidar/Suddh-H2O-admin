import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-delivery-hours',
  templateUrl: './schedule-delivery-hours.component.html',
  styleUrls: ['./schedule-delivery-hours.component.scss']
})
export class ScheduleDeliveryHoursComponent implements OnInit {
data:any;
table:any;
obj={title:'',_id:''}
  constructor(private service:MyService) { }

  ngOnInit() {
    this.service.schedule_delivery()
    .subscribe(res=>{
      this.data=res;
      this.table=this.data.detail;
    });
  }
  deleteconfirmation(data){
     this.obj=data
  }
  delete(id){
    var index= this.table.findIndex(i => i._id === id);
  console.log(index)
  this.table.splice(index,1)
    
     this.service.delete_schedule_delivery(id)
    


  }

}


@Component({
  selector: 'app-addschedule-delivery-hours',
  templateUrl: './addschedule-delivery-hours.component.html',
  styleUrls: ['./schedule-delivery-hours.component.scss']
})
export class AddscheduleDeliveryHoursComponent implements OnInit {

  constructor(private service:MyService,private router:Router) { }

  ngOnInit() {
    
  }
  userModel={title:'',open:'',close:''}
  onSubmit(){
    this.service.add_schedule_delivery(this.userModel)
    .subscribe(res=>{
       this.router.navigate(['schedule-delivery-hours'])
    });
  }
  
}