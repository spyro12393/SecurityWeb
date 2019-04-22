import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stridenav',
  templateUrl: './stridenav.component.html',
  styleUrls: ['./stridenav.component.css']
})
export class STRIDENavComponent implements OnInit {
  flag = 'STRIDENav works!'
  imgURL = '../../assets/'

  constructor() { }

  ngOnInit() {
  }

}
