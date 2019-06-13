import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MyService } from 'app/my.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public table:any;
user={"category":" ",_id:""};
  constructor(private service:MyService, private router:Router) { }

  ngOnInit() {
    
    this.service.viewproduct()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    })
  }

  deleteconfirmation(u){
    console.log(u)
    this.user=u
   
 }

 delete(id) {
    var index= this.table.findIndex(i => i._id === id);
    console.log(index)
    this.table.splice(index,1)
      
       this.service.deleteproduct(id)
      .subscribe(res =>  {
       },
       error =>{
         console.log(error)
       }
     );
    }

  onEditUser(id){
    
this.router.navigate(['/updateproduct',id]);
    
  }

}


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./product.component.scss']
})
export class updateproductComponent implements OnInit {
table:any;
categorys:any=[];
SelectedFile: File = null;

@ViewChild('fileInput') fileInput: ElementRef;
// userModel = {name:'', price:'', category:'', discount: ''}
  constructor(private myservice:MyService,private route:ActivatedRoute,private router:Router) { }
  userModel:any={};
  ngOnInit() {
    this.categorys=[1,2,5,10,15,20]
    this.route.paramMap.subscribe(parameterMap=>{
    this.myservice.productinfo(parameterMap.get('id'))
    .subscribe(res=>{
      this.table=res
    this.userModel={name:this.table.name, price:this.table.price, category:this.table.category, discount:this.table.discount, id:this.table._id}     
    })
  
  })
 }

 onFileSelected(event){
  this.SelectedFile = <File>event.target.files[0];
  console.log(event)
}
 onSubmit(){
  
   
  const fb = new FormData();
  fb.append('image', this.SelectedFile)
  fb.append('name', this.userModel.name)
  fb.append('price', this.userModel.price)
  fb.append('category', this.userModel.category)
  fb.append('discount', this.userModel.discount)

this.myservice.updateproduct(fb)
.subscribe(res=>{
  console.log(res)
  this.router.navigate(['/product'])
 })
}
}


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./product.component.scss']
})
export class addproductComponent implements OnInit {
  public categorys: Array<any> = [];
  SelectedFile: File = null;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private myservice:MyService) { }

  ngOnInit() {
    this.categorys=[1,2,5,10,15,20]
  }

  userModel = {name:'', price:'', category:'', discount: ''}
  onFileSelected(event){
    this.SelectedFile = <File>event.target.files[0];
    console.log(event)
  }

  onSubmit(){
    

    const fb = new FormData();
    fb.append('image', this.SelectedFile)
    fb.append('name', this.userModel.name)
    fb.append('price', this.userModel.price)
    fb.append('category', this.userModel.category)
    fb.append('discount', this.userModel.discount)

  this.myservice.addproduct(fb)
  .subscribe(res=>{
    console.log(res)
  })
  }
}
