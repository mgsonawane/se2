import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public homee(){
    this.router.navigate(['/home']);
  }
}
