import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading = false;
  constructor(private router: Router, private common: CommonService) { }

  ngOnInit() {
    this.loading = true;
    this.common.getMasterData().then((res: any) => {
      console.log(res);
      if (res.Message === "Success") {
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      }

    })
  }

}
