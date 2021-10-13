import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.scss']
})
export class PalletComponent implements OnInit {
  pallets = ['Pallet3418', 'Pallet3420', 'Pallet3419'];
  selectedPallet: any;
  constructor(private router: Router, private common: CommonService) { }
  palletOne() {
    console.log("pallet1")
    this.selectedPallet = this.pallets[0];
    localStorage.setItem('palletId', this.selectedPallet)

    this.common.selectedPallet = localStorage.getItem('palletId');
    // this.common.getPallets();
    // this.common.getMasterData(this.pallets[0]);
    this.router.navigate(['palletbox']);
  }

  palletThree() {
    console.log("pallet3")

    this.selectedPallet = this.pallets[2];
    localStorage.setItem('palletId', this.selectedPallet)

    this.common.selectedPallet = localStorage.getItem('palletId');
    // this.common.getMasterData(this.pallets[1]);

    this.router.navigate(['palletbox'])

  }
  palletTwo() {

    this.selectedPallet = this.pallets[1];
    localStorage.setItem('palletId', this.selectedPallet)

    this.common.selectedPallet = localStorage.getItem('palletId');
    // this.common.getMasterData(this.pallets[1]);

    this.router.navigate(['palletbox'])

  }

  ngOnInit(): void {
  }

}
