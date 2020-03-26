import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css'],
})
export class GlobalComponent implements OnInit {
  restItems: any;
  restItemsUrl = 'https://corona.lmao.ninja/all';

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
