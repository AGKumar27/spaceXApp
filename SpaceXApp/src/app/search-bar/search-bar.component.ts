import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { LaunchInfoService } from '../services/launch-info.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  recivedData: any;
  btnYearInfo: string;
  btnLunchInfo: string;
  btnLandInfo: string;

  constructor(private launch: LaunchInfoService, private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (recivedData) => (this.recivedData = recivedData)
    );
  }
  getDataByYear(lunchYr) {
    this.launch.getAllLunchByYear(lunchYr).subscribe((response) => {
      this.recivedData = response;
      this.data.changeMessage(this.recivedData);
    });
    this.btnYearInfo = lunchYr;
  }
  getLunchData(launchValue: string) {
    this.getAllData(launchValue, "");
  }
  getLandData(landValue: string) {
    this.getAllData("", landValue);
  }
  getAllData(lunchStatus?: string, landStatus?: string) {
    if (lunchStatus !== '' &&
      (this.btnYearInfo === '' || this.btnYearInfo === undefined))
    {
      // Get all data by Successful Launch irrespective of year when
      // True Button or False button is clicked
      this.launch.getAllSuccessfulLaunch(lunchStatus).subscribe((response) => {
        this.recivedData = response;
        console.log(this.recivedData);
        this.data.changeMessage(this.recivedData);
      });
    } else if (
      landStatus !== '' &&
      (this.btnYearInfo === '' || this.btnYearInfo === undefined)
    ) {
      // Get all data by Successful Land irrespective of year when
      // True Button or False button is clicked
      this.launch.getAllSuccessfulLand(landStatus).subscribe((response) => {
        this.recivedData = response;
        this.data.changeMessage(this.recivedData);
      });
    } else if (this.btnYearInfo !== '' || this.btnYearInfo !== undefined) {
      // Get Data When Launch=True, Land=True And Year
      // Get Data When Launch=True, Land=False And Year
      // Get Data When Launch=False, Land=False And Year
      // this.btnLunchInfo = lunchStatus;
      // this.btnLandInfo = landStatus;
      console.log('Launch Btn', lunchStatus);
      console.log('Land Btn', landStatus);
      console.log('Launch Year', this.btnYearInfo);
      this.launch
        .getAllLunchByFilter(
          lunchStatus,
          landStatus,
          this.btnYearInfo
        )
        .subscribe((response) => {
          this.recivedData = response;
          this.data.changeMessage(this.recivedData);
        });
    }
  }
}
