import { Injectable } from '@angular/core';
import * as results from '../../assets/results.json';
import { strideVal } from '../strideVal';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  serviceData: string;

  w_spoofing: number = 3;
  w_tampering: number = 3;
  w_repudiation: number = 3;
  w_information: number = 3;
  w_denial: number = 3;
  w_elevation: number = 3;

  TVI: number = 0;

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


   // Initializing refactoring.
   ref_spoofing = results.Spoofing[0].Refactor;
   ref_tampering = results.Tampering[0].Refactor;
   ref_repudiation = results.Repudiation[0].Refactor;
   ref_information = results.InformationDisclosure[0].Refactor;
   ref_denial = results.DenailOfService[0].Refactor;
   ref_elevation = results.ElevationOfPrivilege[0].Refactor;

  constructor() { }
}
