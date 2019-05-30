import { Injectable } from '@angular/core';
import * as results from '../../assets/results.json';
import { strideVal } from '../strideVal';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  serviceData: string;
  
  w_spoofing: number = 0;
  w_tampering: number = 0;
  w_repudiation: number = 0;
  w_information: number = 0;
  w_denial: number = 0;
  w_elevation: number = 0;

  // Weights of user inputs.
  strideVal: strideVal = {
    spoofing: 0,
    tampering: 0,
    repudiation: 0,
    information: 0,
    denial: 0,
    elevation: 0
  }

   // Results after Ontology Rules.
   spoofingVI = results.Spoofing[0].VI
   tamperingVI = results.Tampering[0].VI
   repudiationVI = results.Repudiation[0].VI
   informationVI = results.InformationDisclosure[0].VI
   denialVI = results.DenailOfService[0].VI
   elevationVI = results.ElevationOfPrivilege[0].VI

  // get W_spoofingVI(){
  //   return this.spoofingVI * this.strideVal.spoofing;
  // }
  // get W_tamperingVI(){
  //   return this.tamperingVI * this.strideVal.tampering;
  // }
  // get W_repudiationVI(){
  //   return this.repudiationVI * this.strideVal.repudiation;
  // }
  // get W_informationVI(){
  //   return this.informationVI * this.strideVal.information;
  // }
  // get W_denialVI(){
  //   return this.denialVI * this.strideVal.denial;
  // }
  // get W_elevationVI(){
  //   return this.elevationVI * this.strideVal.elevation;
  // }


  constructor() { }
}
