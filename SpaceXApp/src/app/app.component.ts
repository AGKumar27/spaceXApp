import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX';

  // recivedData: any;
  // constructor(private launch: LunchInfoService) {}
  // public getAllDataByYear(year) {
  //   this.lunch.getAllLunchByYear(year).subscribe((response) => {
  //     this.recivedData = response;
  //     // console.log(this.recivedData[0].links.mission_patch);
  //     // console.log(this.recivedData.links);
  //   });
  // }

}
