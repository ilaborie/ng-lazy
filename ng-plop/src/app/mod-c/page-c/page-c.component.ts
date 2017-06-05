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
    // <text class="anim" text-anchor="middle" x="50%" y="50%" dy=".35em"></text>
    d3.select('.anim')
      .text(() => this.title);
  }

}
