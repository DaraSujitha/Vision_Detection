import { Injectable } from '@angular/core';
import { apis } from '../config/api';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiRes: any;
  selectedPallet: any
  palletId: any
  constructor(private httpService: HttpService) { }

  getJsondata() {
    return new Promise((resolve, reject) => {
      this.httpService.get(apis.jsonAPI).subscribe((res) => {
        this.apiRes = res;
        typeof (res);
        console.log(res, "json")
        if (res) {
          resolve(res);
        }

      })
    })
  }
  getMasterData() {
    return new Promise((resolve, reject) => {

      let queryParams = '';
      queryParams += '?Pallet=' + this.selectedPallet
      this.httpService.get(apis.masterAPI + queryParams).subscribe((res: any) => {
        console.log(res, "masster");
        if (res) {
          resolve(res);
        }
      })
    })
  }
  getPallets() {
    return new Promise((resolve, reject) => {
      let queryParams = '';
      queryParams += '?Pallet=' + this.selectedPallet
      this.httpService.get(apis.palletAPI + queryParams).subscribe((res: any) => {
        console.log(res);
        if (res) {
          resolve(res);
        }
      })
    })
  }
}
