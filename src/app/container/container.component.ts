import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  tab: string;
  constructor() { }

  ngOnInit() {
    this.tab = "Global";
  }

  setDisplay(input: string){
    this.tab = input;
  }
}
