import {Component} from '@angular/core';
import {Entry} from "./core/model/entry.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leaderboard-ui-tool';

  leaderboard: Entry[] = [];
  leaders: Entry[] = [];

  onModify(): void {
    console.log("change");
    this.leaderboard = [...this.leaders];
    this.leaderboard.sort((a ,b): number => { return b.points - a.points; })
  }

}
