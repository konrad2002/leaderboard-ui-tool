import {Component, Input} from '@angular/core';
import {Entry} from "../core/model/entry.model";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  @Input() leaders: Entry[] = [];

}
