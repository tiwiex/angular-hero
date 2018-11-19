import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass1binding',
  templateUrl: './ass1binding.component.html',
  styleUrls: ['./ass1binding.component.css']
})
export class Ass1bindingComponent implements OnInit {
  clickLogger = [];
  showSecret = false;

  constructor() { }

  ngOnInit() {
  }
  
  onGetClick() {
    this.showSecret = !this.showSecret;
    this.clickLogger.push(this.clickLogger.length + 1);
  }

}
