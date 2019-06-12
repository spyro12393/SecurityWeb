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

  // Normalization
  // stride: Array<{name:string, value:number}> = [];
  stride = [];
  get s_norm(){
    let val = [this.spoofingVI * this.w_spoofing, this.tamperingVI * this.w_tampering, this.repudiationVI * this.w_repudiation, this.informationVI * this.w_information, this.denialVI * this.w_denial, this.elevationVI * this.w_elevation];
    let rs = val.sort((a,b)=>{
      return b - a;
    });

    let norm = (this.spoofingVI * this.w_spoofing - rs[5]) / (rs[0] - rs[5]);

    return Math.round(norm * 100) / 100;
  }

  get t_norm(){
    let val = [this.spoofingVI * this.w_spoofing, this.tamperingVI * this.w_tampering, this.repudiationVI * this.w_repudiation, this.informationVI * this.w_information, this.denialVI * this.w_denial, this.elevationVI * this.w_elevation];
    let rs = val.sort((a,b)=>{
      return b - a;
    });

    let norm = (this.tamperingVI * this.w_tampering - rs[5]) / (rs[0] - rs[5]);

    return Math.round(norm * 100) / 100;
  }

  get r_norm(){
    let val = [this.spoofingVI * this.w_spoofing, this.tamperingVI * this.w_tampering, this.repudiationVI * this.w_repudiation, this.informationVI * this.w_information, this.denialVI * this.w_denial, this.elevationVI * this.w_elevation];
    let rs = val.sort((a,b)=>{
      return b - a;
    });

    let norm = (this.repudiationVI * this.w_repudiation - rs[5]) / (rs[0] - rs[5]);

    return Math.round(norm * 100) / 100;
  }

  get i_norm(){
    let val = [this.spoofingVI * this.w_spoofing, this.tamperingVI * this.w_tampering, this.repudiationVI * this.w_repudiation, this.informationVI * this.w_information, this.denialVI * this.w_denial, this.elevationVI * this.w_elevation];
    let rs = val.sort((a,b)=>{
      return b - a;
    });
    
    let norm = (this.informationVI * this.w_information - rs[5]) / (rs[0] - rs[5]);

    return Math.round(norm * 100) / 100;
  }

  get d_norm(){
    let val = [this.spoofingVI * this.w_spoofing, this.tamperingVI * this.w_tampering, this.repudiationVI * this.w_repudiation, this.informationVI * this.w_information, this.denialVI * this.w_denial, this.elevationVI * this.w_elevation];
    let rs = val.sort((a,b)=>{
      return b - a;
    });
    
    let norm = (this.denialVI * this.w_denial - rs[5]) / (rs[0] - rs[5]);

    return Math.round(norm * 100) / 100;
  }

  get e_norm(){
    let val = [this.spoofingVI * this.w_spoofing, this.tamperingVI * this.w_tampering, this.repudiationVI * this.w_repudiation, this.informationVI * this.w_information, this.denialVI * this.w_denial, this.elevationVI * this.w_elevation];
    let rs = val.sort((a,b)=>{
      return b - a;
    });
    
    let norm = (this.elevationVI * this.w_elevation - rs[5]) / (rs[0] - rs[5]);

    return Math.round(norm * 100) / 100;
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
    return this.spoofingVI * this.w_spoofing + this.tamperingVI * this.w_tampering + this.repudiationVI * this.w_repudiation + 
    this.informationVI * this.w_information + this.denialVI * this.w_denial + this.elevationVI * this.w_elevation;
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
