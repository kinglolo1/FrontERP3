import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/mainModel';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap/nav/nav.module';
import { NgbAlertModule, NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { ProductCsService } from 'src/app/services/product.cs.service';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, NgIf,ReactiveFormsModule],
  templateUrl: './category.component.html',
  
})
export class CategoryComponent  implements OnInit {

  constructor(public serv:ProductCsService,private fb:FormBuilder){}
  public categories!:ICategory[] 
  public cat=new ICategory();
  fg! :  FormGroup;


  ngOnInit(): void {
 this.getCategories();
    this.fg=this.fb.group({
      id:[0],
       catName:  [''],
     imgPath:['']
    
    })
  }

  getCategories(){
   this.serv.getCategory().subscribe({
    next:x=>{
      console.log (x);
     this.categories=x;
    }
   })
  }


  addCat(){
    if(!this.fg.value.id)
      this.fg.value.id=0
     this.cat.id=this.fg.value.id;
      this.cat.catName=this.fg.value.catName;
    this.cat.imgPath=this.fg.value.imgPath;
    if(this.fg.value.id===0)
      {

        this.serv.addCategory(this.cat).subscribe({
          next:x=>{
            this.fg.reset();
             this.getCategories();
             alert ("تم الحفظ");
             let closeBtn=document.getElementById("cancel");
             closeBtn?.click();
         
          }
        })

      }else
      {

        this.cat.id=this.fg.value.id;
        this.cat.catName=this.fg.value.catName;
        this.cat.imgPath=this.fg.value.imgPath;
        this.serv.EditCategory(this.cat.id,this.cat).subscribe({
          next:x=>{
            this.fg.reset();
             this.getCategories();
             alert ("تم التعديل");
             let re=document.getElementById("cancel");
             re?.click();
         
          }
        })


      }

    this.cat=new ICategory();

   
  }

deleteCat(id:number){
  if(confirm("هل تريد بالفعل حذف الفئة المحددة ؟")){
    this.serv.DeleteCategory(id).subscribe({
      next:x=>{
        alert("تم الحذف");
        this.getCategories();
  
      }
    })
  }

}

OpenForEdit(category:ICategory){
this.fg.controls["catName"].setValue(category.catName);
this.fg.controls["id"].setValue(category.id);
 

}
 
   

 

}
