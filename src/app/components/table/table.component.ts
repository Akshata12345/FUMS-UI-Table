import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userData:any = [];
  details:any = [];
  
 
  constructor( private apiService: ApiService ) { 

    this.apiService.getDetails().subscribe(res => {
      this.userData = res ; 
      this.details = this.userData["data"];

      console.log(this.userData)
      console.log(this.details)
      
    });
    
  }

  ngOnInit(): void {
    
  }

}
