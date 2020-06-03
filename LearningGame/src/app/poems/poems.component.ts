import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public homee(){
    this.router.navigate(['/home']);
  }
}
