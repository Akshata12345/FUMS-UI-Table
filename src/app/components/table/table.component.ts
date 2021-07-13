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

  displayedColumns: string[] = ['airline.id','trips', 'airline.name','airline.country','airline.slogan','airline.established'];
  userData:any = [];
  details: MatTableDataSource<any>;
  //details:any = [];

  totalTableLength = 350;
 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filterValue: string;
 
  constructor( private apiService: ApiService) { }
  
  ngOnInit(): void {
      this.apiService.getDetails().subscribe(res => {
      this.userData = res ; 
      this.details = new MatTableDataSource(this.userData["data"]);
      //this.details = this.userData["data"];
      this.details.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'airline.id': return item.airline.id;
          case 'airline.name': return item.airline.name;
          case 'airline.country': return item.airline.country;
          case 'airline.slogan': return item.airline.slogan;
          case 'airline.established': return item.airline.established;
          default: return item[property];
        }
      };
      this.details.sort = this.sort;
      this.details.paginator = this.paginator;
      

      this.details.filterPredicate = (data, filter: string) => {
        return data.airline.id.toString().toLowerCase().includes(filter) ||
        data.airline.name.toString().toLowerCase().includes(filter)||
        data.airline.country.toString().toLowerCase().includes(filter)||
        data.airline.slogan.toString().toLowerCase().includes(filter)||
        data.airline.established.toString().toLowerCase().includes(filter)||
        data.trips.toString().toLowerCase().includes(filter)
      }
      this.totalTableLength= 350;
      
      //console.log(this.userData)
      //console.log(this.details)

      
    });
    
  }

  applyFilter(filterValue: string) {
    this.details.filter = filterValue.trim().toLowerCase();
  }

  onSearchClear() {
     this.filterValue = "";
  }

  pageChanged(event: any){
    let Api = this.apiService.url + event.pageIndex + "&size=" + 10; 
    console.log(Api)
    //console.log(this.apiService.url);
    console.log(event.pageIndex)
    console.log(event.itemsPerPage)
   }
}