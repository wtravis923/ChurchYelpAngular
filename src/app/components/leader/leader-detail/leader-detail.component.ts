import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LeaderService } from 'src/app/services/leader.service';
import { Leader } from 'src/app/models/leader';

@Component({
  selector: 'app-leader-detail',
  templateUrl: './leader-detail.component.html',
  styleUrls: ['./leader-detail.component.css']
})
export class LeaderDetailComponent implements OnInit {

  leader: Leader;

  constructor(private _activatedRoute: ActivatedRoute, private _leaderService: LeaderService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._leaderService.getLeader(routeData.get('id')).subscribe((singleLeader: Leader) => {
        this.leader = singleLeader;
      });
      
    });
  }

}
