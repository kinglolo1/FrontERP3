import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/mainModel';

@Injectable({
  providedIn: 'root'
})
export class ProductCsService {

  constructor(public http:HttpClient) { }
  baseUrl= "https://localhost:7162/api/Category/";
  getCategory(){
   return this.http.get<ICategory[]>(this.baseUrl+"GetAll");
  }

  addCategory(data:any){ 
    return this.http.post<any>(this.baseUrl+"AddCategory",data);
   }

   DeleteCategory(id:number){
     return this.http.delete<any>(this.baseUrl+"DeleteCategory?id="+id);
   }

   EditCategory(id:number,data:ICategory)
   {
    return this.http.put<ICategory>(this.baseUrl+"EditCategory?id="+id,data);
   }
}
