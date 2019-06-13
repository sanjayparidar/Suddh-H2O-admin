import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/my.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
table:any;
detailtable:any;
  constructor(private myservice:MyService) { }

  ngOnInit() {
    this.myservice.order()
    .subscribe(res=>{
      console.log(res)
      this.table=res
      
    })
  }

  orderdeatil(id){
    this.myservice.orderdetail(id)
    .subscribe(res=>{
      console.log(res)
      this.detailtable=res

    })
  }

}
