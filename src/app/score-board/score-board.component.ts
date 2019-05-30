import { Component, OnInit } from '@angular/core';
import { CalcService } from '../service/calc.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  spoofingVI: number = 0;
  tamperingVI: number = 0;
  repudiationVI: number = 0;
  informationVI: number = 0;
  denialVI: number = 0;
  elevationVI: number = 0;

  title = 'hello';

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

  // Calculate weight
  get W_spoofingVI(){
    return this.spoofingVI * this.w_spoofing;
  }
  get W_tamperingVI(){
    return this.tamperingVI * this.w_tampering;
  }
  get W_repudiationVI(){
    return this.repudiationVI * this.w_repudiation;
  }
  get W_informationVI(){
    return this.informationVI * this.w_information;
  }
  get W_denialVI(){
    return this.denialVI * this.w_denial;
  }
  get W_elevationVI(){
    return this.elevationVI * this.w_elevation;
  }

  get TVI(){
    return this.w_denial + this.w_elevation + this.w_information + this.w_repudiation + this.w_spoofing + this.w_tampering;
  }

  constructor(public calc:CalcService) { 

    this.spoofingVI = calc.spoofingVI;
    this.tamperingVI = calc.tamperingVI;
    this.repudiationVI = calc.repudiationVI;
    this.informationVI = calc.informationVI;
    this.denialVI = calc.denialVI;
    this.elevationVI = calc.elevationVI;

    //console.log('Reading local json files');
    //console.log(results);

  }

  ngOnInit() {
  }

}
