import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.scss']
})
export class PalletComponent implements OnInit {
  selectedPallet: any;
  pallets = ['Pallet3211', 'Pallet3212',]
  constructor(private router: Router) { }
  palletOne() {
    this.router.navigate(['palletbox'])
    console.log(this.selectedPallet = this.pallets[0])
  }

  palletThree() {
    this.router.navigate(['palletbox'])
    console.log(this.selectedPallet = this.pallets[1])
  }

  ngOnInit(): void {

  }

}
