import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  restItems: any;
  restItemsUrl = 'https://corona.lmao.ninja/countries';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }
  //read all REST items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems)
        }
      )
  }
  //Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http 
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data=>data))
  }
}
