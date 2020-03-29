import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  tab: string;
  globalResult: any;
  usaResult: any;
  europeResult: any;
  generalInfoResult: any;
  readonly usaUrl: string = "https://corona.lmao.ninja/states";
  readonly globalUrl: string = "https://corona.lmao.ninja/all";
  readonly europeUrl: string = "https://corona.lmao.ninja/v2/jhucsse";
  readonly generalInfoUrl: string = "https://corona.lmao.ninja/countries";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGlobal();
    this.getEurope();
    this.getUsa();
    this.getGeneralInfo();
    this.tab = "USA";
  }

  setDisplay(input: string){
    this.tab = input;
  }

  getUsa(): void {
    this.Fetch(this.usaUrl)
      .subscribe(
        result => {
          this.usaResult = result;
        }
      )
  }

  getGlobal(): void {
    this.Fetch(this.globalUrl)
      .subscribe(
        result => {
          this.globalResult = result;
        }
      );
  }

  getEurope(): void {
    this.Fetch(this.europeUrl)
      .subscribe(
        result => {
          this.europeResult = result;
        }
      );
  }

  getGeneralInfo(): void {
    this.Fetch(this.generalInfoUrl)
      .subscribe(
        result => {
          this.generalInfoResult = result;
        }
      );
  }

  //Rest Items Service: Read all REST Items
  Fetch(url: string) {
    return this.http 
      .get<any[]>(url)
      .pipe(map(data=>data))
  }

}
