import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class USAComponent implements OnInit {
  restItems: any;
  restItemsURL = "https://corona.lmao.ninja/states";

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
      .get<any[]>(this.restItemsURL)
      .pipe(map(data=>data))
  }
}
