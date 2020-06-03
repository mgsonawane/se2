import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  public homee(){
    this.router.navigate(['/home']);
  }

}
