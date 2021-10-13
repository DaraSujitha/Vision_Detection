import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { apis } from '../../config/api'
import { CommonService } from '../../Services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  palletInfo: any;
  checksInfo: any;
  inspectfail: any;
  palletText: any;
  imgData: any;
  urlString: any;
  dashboardImages: any = [];
  dashboardImages1: any = [];
  boxIds: any = [];
  isLoading = false;
  constructor(private httpService: HttpService, private common: CommonService) { }

  ngOnInit(): void {

    this.getpalletInfo();
    this.getChecksInfo();
    this.getImages();
  }


  getpalletInfo() {
    this.isLoading = true;
    this.httpService.get(apis.palletInfoAPI).subscribe((res: any) => {
      this.palletInfo = res;
      if (res) {
        this.common.palletId = this.palletInfo['Pallet ID'];
        if (this.palletInfo['Inspect Fail'] == 0) {
          this.palletText = "Pallet Accepted"
        }
        else {
          this.palletText = "Pallet Rejected"
        }
        console.log(this.common.palletId)
      }
    })
  }

  getChecksInfo() {
    this.isLoading = true;

    this.httpService.get(apis.checksAPI).subscribe((res: any) => {
      this.checksInfo = res;
      if (res) {
        this.isLoading = false;
      }
    })
  }
  getImages() {
    this.isLoading = true;
    this.common.getJsondata().then((res) => {
      if (res) {
        this.isLoading = false;
      }
      this.imgData = res;
      for (let i = 0; i < this.imgData.length; i++) {
        let boxlen = Object.keys(this.imgData[i].Boxes).length;
        for (let j = 1; j <= boxlen; j++) {
          // if (this.imgData[0]) {
          this.dashboardImages.push({ img: this.imgData[i].Boxes[j]['Blob URL'], boxIds: this.imgData[i].Boxes[j]['Box id'], sides: this.imgData[i]['Side'] });
          // }
          // else {
          //   this.dashboardImages1.push({ img: this.imgData[i].Boxes[j]['Blob URL'], boxIds: this.imgData[i].Boxes[j]['Box id'] });

          // }
        }
      }

    });


  }
}
