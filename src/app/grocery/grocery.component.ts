import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  
  
  itemname!:string;
  Quantity!:string;
  photourl!:string;
  public Grocery: Array<any> = [];
  i=0
  addItem(){
    var person = { 
      id:this.i,
      itemname:this.itemname, 
      Quantity:this.Quantity,
      photourl:this.photourl

   }; 
   this.Grocery.push(person)
   
   ++this.i

      
  }
  remove(key: any){
    
    this.Grocery.forEach((value,index)=>{
      if(value.id==key.id) this.Grocery.splice(index,1);
    });

  }
  


  message=[]
  view(key: any){
    this.message=key;
    window.open('http://localhost:4200/view')
    window.localStorage.setItem("array", JSON.stringify(this.message));
    



    
    

    

  }
  

  
  

}
