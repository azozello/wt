import { Component, OnInit } from '@angular/core';
import {range} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  texts = [];

  constructor() { }

  ngOnInit() {
    range(1, 20).subscribe(
      number => {
        this.texts.push({
          label: `Label number #${number}`,
          text: 'In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message. This set of symbols is considered in terms of the informative message\'s content, rather than in terms of its physical form or the medium in which it is represented.'
        });
      }
    );
  }

}
