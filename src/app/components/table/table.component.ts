import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Id','trips', 'airName','country','slogan','established'];
  userData:any = [];
  //details:any = [];
  details: MatTableDataSource<any>;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
 

  constructor( private apiService: ApiService) { }
  
  ngOnInit(): void {
      this.apiService.getDetails().subscribe(res => {
      this.userData = res ; 
      this.details = new MatTableDataSource(this.userData["data"]);
      //this.details = this.userData["data"];
      this.details.sort = this.sort;
      this.details.paginator = this.paginator;
      
      console.log(this.userData)
      console.log(this.details)
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.details.filter = this.searchKey.trim().toLowerCase();
  }

}