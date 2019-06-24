import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }

  viewproduct(){
    return this.http.get("https://sheltered-woodland-33544.herokuapp.com/admin_viewproduct")
    
  }
  addproduct(data){
    return this.http.post("https://sheltered-woodland-33544.herokuapp.com/admin_addproduct",data)
  }

  deleteproduct(id){
    return this.http.get(' https://sheltered-woodland-33544.herokuapp.com/admin_viewproduct/delete/'+id)
  }
  productinfo(id){
    return this.http.get('https://sheltered-woodland-33544.herokuapp.com/admin_viewproduct/update/'+id )
  }
  updateproduct(data){
    return this.http.post('https://sheltered-woodland-33544.herokuapp.com/admin_addproduct/update' ,data)
  }
 
  viewpromo(){
    return this.http.get('https://sheltered-woodland-33544.herokuapp.com/viewpromo')
  }

  addpromo(data){
    return this.http.post('https://sheltered-woodland-33544.herokuapp.com/addpromo', data)

  }
  deletepromo(id){
    return this.http.get('https://sheltered-woodland-33544.herokuapp.com/viewpromo/delete/'+id)
    
}
  promoinfo(id){
    console.log(id)
    return this.http.get('https://sheltered-woodland-33544.herokuapp.com/viewpromo/update/'+id)  
  }
  updatepromo(data){
    return this.http.post('https://sheltered-woodland-33544.herokuapp.com/addpromo/update', data)
  }
  userdetail(){
    return this.http.get('https://sheltered-woodland-33544.herokuapp.com/admin_alluser')
  }

  order(){

   return this.http.get('https://sheltered-woodland-33544.herokuapp.com/order/viewallorder')
  }
  orderdetail(data){
    var obj={"id":data}
    return this.http.post('https://sheltered-woodland-33544.herokuapp.com/orderhistory',obj)

  }
  login(data){
    return this.http.post('https://sheltered-woodland-33544.herokuapp.com/adminpanel',data)
  }
}
