import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-palletbox',
  templateUrl: './palletbox.component.html',
  styleUrls: ['./palletbox.component.scss']
})
export class PalletboxComponent implements OnInit {
  palletimgs: any;
  isLoading = false;

  constructor(private router: Router, private common: CommonService) { }

  async ngOnInit() {
    console.log("img")

    await this.common.getPallets().then((res: any) => {
      this.palletimgs = res;
      if (res) {
      }
      console.log(res);
    })
    console.log(this.palletimgs, "img")

  }
  palletloading() {
    this.router.navigate(['loader'])
  }

}
