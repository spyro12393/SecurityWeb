import { Component, OnInit } from '@angular/core';
import { CalcService } from '../service/calc.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  ref_spoofing: string[];
  ref_tampering: string[];
  ref_repudiation: string[];
  ref_information: string[];
  ref_denial: string[];
  ref_elevation: string[];

  TVI: number = 0;

  constructor(public calc:CalcService) {
    this.ref_spoofing = this.calc.ref_spoofing;
    this.ref_tampering = this.calc.ref_tampering;
    this.ref_repudiation = this.calc.ref_repudiation;
    this.ref_information = this.calc.ref_information;
    this.ref_denial = this.calc.ref_denial;
    this.ref_elevation = this.calc.ref_elevation;

    this.TVI = this.calc.TVI;
  }

  ngOnInit() {
  }

}
