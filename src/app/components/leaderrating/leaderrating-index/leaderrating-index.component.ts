import { Component, OnInit } from '@angular/core';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { LeaderRating } from '../../../models/leaderrating';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-leaderrating-index',
  templateUrl: './leaderrating-index.component.html',
  styleUrls: ['./leaderrating-index.component.css']
})
export class LeaderratingIndexComponent implements OnInit {

  constructor(private _leaderratingService: LeaderratingService) { }

  ngOnInit() {
    this._leaderratingService.getLeaderRatings().subscribe((leaderrating: LeaderRating[]) => {
        this.dataSource = new MatTableDataSource<LeaderRating>(leaderrating)
    });
  }
  columnNames = ['LeaderId', 'LeaderRatingId', 'UserId', 'SpeakingAbilityRating', 'EngagingRating', 'AuthenticRating', 'RapportRating', 'buttons'];
  dataSource: MatTableDataSource<LeaderRating>
}
