import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  data = [
    { img: 'assets/images/Picture5.png', orient: "Accepted in Right Direction", label: 'Yes Accepted', barcode: '', bar: 'Barcode Not Scanned', damage: 'Damaged', box: "BOX-5" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
