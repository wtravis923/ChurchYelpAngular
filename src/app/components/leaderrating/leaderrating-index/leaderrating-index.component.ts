import { Component, OnInit } from '@angular/core';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { LeaderRating } from '../../../models/leaderrating';


@Component({
  selector: 'app-leaderrating-index',
  templateUrl: './leaderrating-index.component.html',
  styleUrls: ['./leaderrating-index.component.css']
})
export class LeaderratingIndexComponent implements OnInit {

  constructor(private _leaderratingService: LeaderratingService) { }

  ngOnInit() {
    this._leaderratingService.getLeaderRating().subscribe((leaderrating: LeaderRating[]) => {

    });
  }
}
