import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit, OnChanges {
  @Input() gridData: any;
  test = [
    {
      img: '../../../assets/images/Mask.png',
      label: 'test',
      profile: '../../../assets/images/Oval.png'
    },
    {
      img: '../../../assets/images/Mask.png',
      label: 'test',
      profile: '../../../assets/images/Oval.png'
    },
    {
      img: '../../../assets/images/Mask.png',
      label: 'test',
      profile: '../../../assets/images/Oval.png'
    },
    {
      img: '../../../assets/images/Mask.png',
      label: 'test',
      profile: '../../../assets/images/Oval.png'
    },
    {
      img: '../../../assets/images/Mask.png',
      label: 'test',
      profile: '../../../assets/images/Oval.png'
    }
  ]
  favItem = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log("gridData", this.gridData);
    
  }

  addFavourite() {
    this.favItem = !this.favItem;
  }

}
