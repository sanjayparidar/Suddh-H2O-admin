import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/my.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
table:any;

user={"promocode":" ",_id:""};
  constructor(private myservice:MyService,private router:Router) { }

  ngOnInit() {
    this.myservice.viewpromo()
    .subscribe(res=>{
      this.table=res
    })
  }

  deleteconfirmation(data){
    console.log(data)
    this.user=data
   
 }

 delete(id) {
  var index= this.table.findIndex(i => i._id === id);
  console.log(index)
  this.table.splice(index,1)
    
     this.myservice.deletepromo(id)
    .subscribe(res =>  {
      console.log(res)
     },
     error =>{
       console.log(error)
     }
   );
  }

  onEditUser(id){
    
    this.router.navigate(['/updatepromo',id]);
        
      }

}


  @Component({
    selector: 'app-updatepromo',
    templateUrl: './updatepromo.component.html',
    styleUrls: ['./promo.component.scss']
  })
  export class updatepromoComponent implements OnInit {
  table:any;
  userModel:any={ }
    constructor(private myservice:MyService, private route:ActivatedRoute,private router:Router) { }
  
    ngOnInit() {
      
    this.route.paramMap.subscribe(parameterMap=>{
    this.myservice.promoinfo(parameterMap.get('id'))
    .subscribe(res=>{
      console.log(res)
      this.table=res
    this.userModel={promoname:this.table.promoname, promocode:this.table.promocode, startdate:this.table.startdate, discount:this.table.discount, enddate:this.table.enddate,id:this.table._id}     
    })
   })
 }
 onSubmit(){
   console.log(this.userModel)
   this.myservice.updatepromo(this.userModel)
   .subscribe(res=>{
         console.log(res)
         this.router.navigate(['/promo'])
   })
 }
 }



 @Component({
  selector: 'app-addpromo',
  templateUrl: './addpromo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class AddpromoComponent implements OnInit {
public 
  constructor(private myservice:MyService) { }

  ngOnInit() {

  }

  userModel={promoname:"",promocode:"",startdate:"",enddate:"",discount:""}
  onSubmit(){
    this.myservice.addpromo(this.userModel)
    .subscribe(res=>{
      console.log(res)
    })
  }

}
