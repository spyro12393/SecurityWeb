import { Component, OnInit } from '@angular/core';
import { strideVal } from '../strideVal';

@Component({
  selector: 'app-stridenav',
  templateUrl: './stridenav.component.html',
  styleUrls: ['./stridenav.component.css']
})
export class STRIDENavComponent implements OnInit {
  flag = 'STRIDENav works!'
  imgURL = '../../assets/'

  strideVal: strideVal = {
    spoofing: 0,
    tampering: 0,
    repudiation: 0,
    information: 0,
    denial: 0,
    elevation: 0
  }

  strideScale = [
    { id: 1, name: '極不重要', value: 0.00 },
    { id: 2, name: '較不重要', value: 0.25 },
    { id: 3, name: '普通', value: 0.5 },
    { id: 4, name: '高度重要', value: 0.75 },
    { id: 5, name: '極度重要', value: 1.00 }
  ];


  constructor() { }

  ngOnInit() {
  }

}
