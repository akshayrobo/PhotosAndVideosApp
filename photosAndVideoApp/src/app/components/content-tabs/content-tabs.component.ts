import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpsService } from 'src/app/services/http.service';

@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss']
})
export class ContentTabsComponent implements OnInit, OnChanges {
  showPhoto = false;
  showVideo = false;
  showFavourite = false;
  @Input() searchData: any;
  data: any;
  constructor(private httpService: HttpsService) {
    console.log("::::::::::::::::", this.searchData)
  }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log("::::::::::::::::", this.searchData)
    if (this.searchData.type == 'photo') {
      this.data = this.searchData;
    }
  }
  showPhotos() {
    this.showPhoto = true;
    this.showVideo = false;
    this.showFavourite = false;
  }
  showVideos() {
    this.showVideo = true;
    this.showPhoto = false;
    this.showFavourite = false;
    console.log('showPhotos')
    this.httpService.searchPhoto(this.searchData.searchKey, 20).subscribe(res => {
      console.log("............", this.searchData);
      this.data = {
        type: 'Video',
        searchKey: this.searchData.searchKey,
        data: res.photos
      }
    })
  }
  showFavourites() {
    this.showFavourite = true;
    this.showPhoto = false;
    this.showVideo = false;
    console.log('showPhotos')
  }
}
