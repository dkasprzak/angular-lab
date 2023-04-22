import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  @Input() title = "Default";
  @Input() icon = "Default";
  @Input() value = 0;
  @Input() color = "";

  constructor() { }

  ngOnInit(): void {
  }

}
