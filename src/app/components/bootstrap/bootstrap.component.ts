import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css'],
  providers: []
})
export class BootstrapComponent implements OnInit {
  listData : any ; 
  constructor(private shared : SharedService ) { }

  ngOnInit(): void {
    this.listData = this.shared.getInputData();
  }
  
}
