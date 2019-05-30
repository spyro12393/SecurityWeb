import { Component, OnInit } from '@angular/core';
import { strideVal } from '../strideVal';
import * as results from '../../assets/results.json';

@Component({
  selector: 'app-stridenav',
  templateUrl: './stridenav.component.html',
  styleUrls: ['./stridenav.component.css']
})
export class STRIDENavComponent implements OnInit {
  flag = 'STRIDENav works!'
  imgURL = '../../assets/'


  // Results after Ontology Rules.
  spoofingVI = results.Spoofing[0].VI
  tamperingVI = results.Tampering[0].VI
  repudiationVI = results.Repudiation[0].VI
  informationVI = results.InformationDisclosure[0].VI
  denialVI = results.DenailOfService[0].VI
  elevationVI = results.ElevationOfPrivilege[0].VI
  // Weights of user inputs.
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


  constructor() { 
    console.log('Reading local json files');
    console.log(results);

  }

  // Calculate weight
  get W_spoofingVI(){
    return this.spoofingVI * this.strideVal.spoofing;
  }
  get W_tamperingVI(){
    return this.tamperingVI * this.strideVal.tampering;
  }
  get W_repudiationVI(){
    return this.repudiationVI * this.strideVal.repudiation;
  }
  get W_informationVI(){
    return this.informationVI * this.strideVal.information;
  }
  get W_denialVI(){
    return this.denialVI * this.strideVal.denial;
  }
  get W_elevationVI(){
    return this.elevationVI * this.strideVal.elevation;
  }

  ngOnInit() {
  }

}
