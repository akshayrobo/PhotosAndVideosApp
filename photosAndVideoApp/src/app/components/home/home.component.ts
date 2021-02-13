import { HttpsService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchParams = "all";
  searchData: any;
  constructor(private httpService: HttpsService) { }

  ngOnInit(): void {
    this.Onsearch();

  }

  Onsearch() {
    this.httpService.searchPhoto(this.searchParams, 20).subscribe(res => {
      this.searchData = {
        type: 'photo',
        searchKey: this.searchParams,
        data: res.photos
      }
      console.log("............",this.searchData);
      
    })
  }
}
