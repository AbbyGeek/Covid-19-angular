import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
  @Input() europeResult: any;  

  constructor() { }

  ngOnInit() {
  }

  getCountryFilter(input: string): any{
    return this.europeResult.filter(x => x.country == input);
  }

  getCountryData(input: string): any{
    return this.europeResult.filter(x => x.country == input && (x.province == null || x.province == ""));
  }

  readonly countries: string[] = [
  'Russia',
  'Germany',
  'United Kingdom',
  'France',
  'Italy',
  'Spain',
  'Ukraine',
  'Poland',
  'Romania',
  'Netherlands',
  'Belgium',
  'Czechia',
  'Greece',
  'Portugal',
  'Sweden',
  'Hungary',
  'Belarus',
  'Austria',
  'Serbia',
  'Switzerland',
  'Bulgaria',
  'Denmark',
  'Finland',
  'Slovakia',
  'Norway',
  'Ireland',
  'Croatia',
  'Moldova',
  'Bosnia and Herzegovina',
  'Albania',
  'Lithuania',
  'North Macedonia',
  'Slovenia',
  'Latvia',
  'Estonia',
  'Montenegro',
  'Luxembourg',
  'Malta',
  'Iceland',
  'Andorra',
  'Monaco',
  'Liechtenstein',
  'San Marino',
  'Holy See',
  ].sort();

}
