import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderRating } from 'src/app/models/leaderrating';
import { LeaderratingService } from 'src/app/services/leaderrating.service';

@Component({
  selector: 'app-leaderrating-detail',
  templateUrl: './leaderrating-detail.component.html',
  styleUrls: ['./leaderrating-detail.component.css']
})
export class LeaderratingDetailComponent implements OnInit {

  leaderrating: LeaderRating;

  constructor(private _activatedRoute: ActivatedRoute, private _leaderratingService: LeaderratingService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._leaderratingService.getLeaderRating(routeData.get('id')).subscribe((singleLeaderRating: LeaderRating) => {
        this.leaderrating = singleLeaderRating;
      });
    });
  }
} 
