import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnInit {
  title = 'page-c works!';

  constructor() {
  }

  ngOnInit() {
  }

  apply() {
    d3.select('.anim')
      .text(() => this.title);
  }

}
