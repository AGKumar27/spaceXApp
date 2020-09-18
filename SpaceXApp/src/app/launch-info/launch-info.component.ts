import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { LaunchInfoService } from '../services/launch-info.service';

@Component({
  selector: 'app-launch-info',
  templateUrl: './launch-info.component.html',
  styleUrls: ['./launch-info.component.css'],
})
export class LaunchInfoComponent implements OnInit {
  recivedData: any;
  showLoadingIndicator = false;
  constructor(private lunch: LaunchInfoService, private data: DataService) {}

  public getLunchInfo() {
    this.lunch.getAllLunches().subscribe((response) => {
      this.recivedData = response;
      // console.log(this.recivedData.length);
      // if (this.recivedData.length !== 0) {
      //   this.showLoadingIndicator = true;
      // }
    });
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(
      (recivedData) => (this.recivedData = recivedData)
    );
    this.getLunchInfo();
  }
}
