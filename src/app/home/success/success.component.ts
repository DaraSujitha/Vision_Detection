import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  constructor(private common: CommonService, private router: ActivatedRoute) { }
  imgData: any
  carouselImgs: any = [];
  lablesData: any = [];
  sideOne: any[] = [];
  sides: any = [];
  selectedIndex: any;
  palletId: any;
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log(params, "id")
      this.selectedIndex = params.id;
    })
    this.palletId = localStorage.getItem('palletId');
    this.getImages();

  }
  getBarcode(label: any) {
    label.barcode = [];

    for (const barcodekey of Object.keys(label.Barcode)) {
      label.barcode.push(label.Barcode[barcodekey]);
    }
    console.log(label.barcode, "barcode")

    return label;
  }
  getLabels(boxes: any) {
    boxes.label = [];
    for (const key of Object.keys(boxes.Labels)) {
      boxes.label.push(this.getBarcode(boxes.Labels[key]));
    }
    return boxes;
  }

  getImages() {
    // this.isLoading = true;
    this.common.getJsondata().then((res) => {
      console.log(res);
      if (res && Array.isArray(res)) {
        res.forEach(element => {
          // this.sideOne.push(element.Side);
          for (const key of Object.keys(element.Boxes)) {
            this.sideOne.push(this.getLabels(element.Boxes[key]))
          }

          // this.sideOne.forEach((el) => {
          //   for (const key of Object.keys(el.Labels)) {
          //     // console.log(key, "key")
          //     this.sideOne.label = [];
          //     this.sideOne[i].label.push(this.getBarcode(el.Labels[key]))

          //   }
          //   console.log(this.sideOne[i].label, "labels")
          // });

        });
        console.log(this.sideOne, "side")
        // this.isLoading = false;
      }
      this.imgData = res;
      for (let i = 0; i < this.imgData.length; i++) {
        let boxlen = Object.keys(this.imgData[i].Boxes).length;
        for (let j = 1; j <= boxlen; j++) {
          // if (this.imgData[0]) {
          //   let labelsdata = [];
          //   let barcodes = [];
          //   for (let k = 1; k <= Object.keys(this.imgData[i].Boxes[j].Labels).length; k++) {

          //     labelsdata.push(this.imgData[i].Boxes[j].Labels[k]);
          //     for (let l = 1; l < Object.keys(this.imgData[i].Boxes[j].Labels[k].Barcode).length; l++) {
          //       barcodes.push(this.imgData[i].Boxes[j].Labels[k].Barcode[`b${l}`])

          //     }
          //   }
          // console.log(labelsdata[0]['Label Bbox'], "data")
          // console.log(barcodes, "bar")
          // this.carouselImgs.push({
          //   img: this.imgData[i].Boxes[j]['Blob URL'],
          //   boxIds: this.imgData[i].Boxes[j]['Box id'],
          //   orientationBox: this.imgData[i].Boxes[j]['Orientation Bbox'],
          //   orientationStatus: this.imgData[i].Boxes[j]['Orientation Status'],
          //   damage: this.imgData[i].Boxes[j]['Box Status'],
          // labelsDetected: this.imgData[i].Boxes[j].Labels['1']['Label Detected'],
          // labelBox: this.imgData[i].Boxes[j].Labels['1']['Label Bbox'],
          // labelId: this.imgData[i].Boxes[j].Labels['1']['Label id'],
          // barcodeBox: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode Bbox'],
          // barcodeData: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode Data'],
          // barcodeType: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode Type'],
          // barcodeId: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode id']
          // });
          // this.lablesData = this.imgData[i].Boxes[j].Labels
          // for (let k = 1; k <= Object.keys(this.imgData[i].Boxes[j].Labels).length; k++) {
          //   this.lablesData += this.imgData[i].Boxes[j].Labels[`${k}`]['Label Bbox']
          // }
        }
        // console.log(this.lablesData);
        // console.log(Object.keys(this.imgData[i].Boxes[j].Labels).length)

        // else {
        //   this.dashboardImages1.push({ img: this.imgData[i].Boxes[j]['Blob URL'], boxIds: this.imgData[i].Boxes[j]['Box id'] });

        // }
      }
    })

    // console.log(this.imgData[0].Boxes['1']['Orientation Bbox']);
    // console.log(this.imgData[0].Boxes['1']['Orientation Status']);
    // console.log(this.imgData[0].Boxes['2']['Orientation Bbox']);
    // console.log(this.imgData[0].Boxes['2']['Orientation Status']);
    // console.log(this.imgData[0].Boxes['3']['Orientation Bbox']);
    // console.log(this.imgData[0].Boxes['3']['Orientation Status']);
    // console.log(this.imgData[0].Boxes['1']['Box Status']);

    // console.log(this.imgData[0].Boxes['1'].Labels['1']['Label Detected']);
    // console.log(this.imgData[0].Boxes['1'].Labels['1']['Label Bbox']);
    // console.log(this.imgData[0].Boxes['1'].Labels['1']['Label id']);
    // console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode Bbox']);
    // console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode Data']);
    // console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode Type']);
    // console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode id']);
    // })
  }
  //     this.imgData = res;
  //     for (let i = 0; i < this.imgData.length; i++) {
  //       let boxlen = Object.keys(this.imgData[i].Boxes).length;
  //       for (let j = 1; j <= boxlen; j++) {

  //         if (this.imgData[0]) {
  //           // let labelLen = Object.keys(this.imgData[i].Boxes[j].Labels).length;
  //           let labelLen = Object.keys(this.imgData[i].Boxes[j].Labels);

  //           let lablesData = [];
  //           for (let s = 1; s <= labelLen.length; s++) {
  //             lablesData.push(this.imgData[i].Boxes[j].Labels[`${s}`]['Label Bbox'])

  //           }
  //           for (const key of labelLen) {
  //             lablesData.push(this.imgData[i].Boxes[j].Labels[key])
  //           }
  //           this.carouselImgs.push({
  //             img: this.imgData[i].Boxes[j]['Blob URL'],
  //             boxIds: this.imgData[i].Boxes[j]['Box id'],
  //             orientationBox: this.imgData[i].Boxes[j]['Orientation Bbox'],
  //             orientationStatus: this.imgData[i].Boxes[j]['Orientation Status'],
  //             damage: this.imgData[i].Boxes[j]['Box Status'],
  //             // labelsDetected: this.imgData[i].Boxes[j].Labels['1']['Label Detected'],
  //             labelBox: lablesData,
  //             // labelId: this.imgData[i].Boxes[j].Labels['1']['Label id'],
  //             // barcodeBox: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode Bbox'],
  //             // barcodeData: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode Data'],
  //             // barcodeType: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode Type'],
  //             // barcodeId: this.imgData[i].Boxes[j].Labels['1'].Barcode['b0']['Barcode id']
  //           });
  //           // this.lablesData = this.imgData[i].Boxes[j].Labels
  //           for (let k = 1; k <= Object.keys(this.imgData[i].Boxes[j].Labels).length; k++) {
  //             this.lablesData += this.imgData[i].Boxes[j].Labels[`${k}`]['Label Bbox']
  //           }
  //         }
  //         console.log(this.lablesData);
  //         console.log(Object.keys(this.imgData[i].Boxes[j].Labels).length)

  //         // else {
  //         //   this.dashboardImages1.push({ img: this.imgData[i].Boxes[j]['Blob URL'], boxIds: this.imgData[i].Boxes[j]['Box id'] });

  //         // }
  //       }
  //     }
  //     console.log(this.imgData[0].Boxes['1']['Orientation Bbox']);
  //     console.log(this.imgData[0].Boxes['1']['Orientation Status']);
  //     console.log(this.imgData[0].Boxes['2']['Orientation Bbox']);
  //     console.log(this.imgData[0].Boxes['2']['Orientation Status']);
  //     console.log(this.imgData[0].Boxes['3']['Orientation Bbox']);
  //     console.log(this.imgData[0].Boxes['3']['Orientation Status']);
  //     console.log(this.imgData[0].Boxes['1']['Box Status']);

  //     console.log(this.imgData[0].Boxes['1'].Labels['1']['Label Detected']);
  //     console.log(this.imgData[0].Boxes['1'].Labels['1']['Label Bbox']);
  //     console.log(this.imgData[0].Boxes['1'].Labels['1']['Label id']);
  //     console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode Bbox']);
  //     console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode Data']);
  //     console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode Type']);
  //     console.log(this.imgData[0].Boxes['1'].Labels['1'].Barcode.Nan['Barcode id']);
  //   })
  // }


}
