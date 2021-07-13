import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  listData : any ; 

  constructor() { }

  setInputData(data:any) {
    this.listData = data
  }

  getInputData() {
    return this.listData ; 
  }
}
