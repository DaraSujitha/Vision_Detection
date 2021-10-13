import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../Services/http.service';
import { apis } from '../config/api'

@Component({
  selector: 'app-palletbox',
  templateUrl: './palletbox.component.html',
  styleUrls: ['./palletbox.component.scss']
})
export class PalletboxComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
  }
  palletloading() {
    this.router.navigate(['dashboard']);
  }
  cancel() {
    this.router.navigate(['pallet']);
  }
}
