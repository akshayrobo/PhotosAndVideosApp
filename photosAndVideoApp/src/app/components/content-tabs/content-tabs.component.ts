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
  favouriteItems: any;
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
    this.httpService.searchPhoto(this.searchData.searchKey, 20).subscribe(res => {
      this.searchData = {
        type: 'photo',
        searchKey: this.searchData.searchKey,
        data: res.photos
      }
      console.log("............", this.searchData);

    })
  }
  showVideos() {
    this.showVideo = true;
    this.showPhoto = false;
    this.showFavourite = false;
    console.log('showPhotos')
    this.httpService.searchVideo(this.searchData.searchKey, 20).subscribe(res => {
      console.log("............", this.searchData);
      this.data = {
        type: 'Video',
        searchKey: this.searchData.searchKey,
        data: res.videos
      }
    })
  }
  showFavourites() {
    this.showFavourite = true;
    this.showPhoto = false;
    this.showVideo = false;
    let searchingArray = !!this.data.data ? this.data.data : this.searchData.data;
    searchingArray.forEach(element => {
      if (element.liked) {
        this.favouriteItems.push(element)
      }
      if (!!this.favouriteItems) {
        this.favouriteItems = [];
      }
    });
    this.data = {
      type: 'favourites',
      searchKey: this.data.searchKey,
      data: this.favouriteItems
    }
  }
}
