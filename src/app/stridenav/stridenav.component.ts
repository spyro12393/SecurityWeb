import { Component, OnInit, Input } from '@angular/core';
import { strideVal } from '../strideVal';
import * as results from '../../assets/results.json';
import { CalcService } from '../service/calc.service';

@Component({
  selector: 'app-stridenav',
  templateUrl: './stridenav.component.html',
  styleUrls: ['./stridenav.component.css']
})
export class STRIDENavComponent implements OnInit {
  flag = 'STRIDENav works!'
  imgURL = '../../assets/'

  // Weights of user inputs.
  strideVal: strideVal = {
    spoofing: 0,
    tampering: 0,
    repudiation: 0,
    information: 0,
    denial: 0,
    elevation: 0
  }

  // strideScale = [
  //   { id: 1, name: '極不重要', value: 0.00 },
  //   { id: 2, name: '較不重要', value: 0.25 },
  //   { id: 3, name: '普通', value: 0.5 },
  //   { id: 4, name: '高度重要', value: 0.75 },
  //   { id: 5, name: '極度重要', value: 1.00 }
  // ];

  // Different component binding
  get w_spoofing():number {
    return this.calc.w_spoofing;
  }

  set w_spoofing(value: number){
    this.calc.w_spoofing = value;
  }

  get w_tampering():number {
    return this.calc.w_tampering;
  }

  set w_tampering(value: number){
    this.calc.w_tampering = value;
  }

  get w_repudiation():number {
    return this.calc.w_repudiation;
  }

  set w_repudiation(value: number){
    this.calc.w_repudiation = value;
  }

  get w_information():number {
    return this.calc.w_information;
  }

  set w_information(value: number){
    this.calc.w_information = value;
  }

  get w_denial():number {
    return this.calc.w_denial;
  }

  set w_denial(value: number){
    this.calc.w_denial = value;
  }

  get w_elevation():number {
    return this.calc.w_elevation;
  }

  set w_elevation(value: number){
    this.calc.w_elevation = value;
  }

  spoofingVI: number = 0;

  constructor(public calc:CalcService) { 

    console.log('Reading local json files');
    console.log(results);

  }

  Submit(calc:CalcService){
    alert('Done.');
    
  }

  ngOnInit() {
  }

}
