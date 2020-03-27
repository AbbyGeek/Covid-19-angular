import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class USAComponent implements OnInit {
  @Input() usaResult: any;

  constructor() {}

  ngOnInit() {
  }
  //read all REST items
}
