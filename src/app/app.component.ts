import { Component } from '@angular/core';
import arrayOfwords from '../../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  words: string = '';
  limit: any = 10;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayOfwords.slice(0, this.limit).join(' ');
  }
}
