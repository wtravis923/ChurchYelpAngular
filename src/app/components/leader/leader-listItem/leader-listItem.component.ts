import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader.service';
import { Leader } from '../../../models/Leader';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-leader-listItem',
  templateUrl: './leader-listItem.component.html',
  styleUrls: ['./leader-listItem.component.css']
})
export class LeaderListItemComponent implements OnInit {

  constructor(private _leaderService: LeaderService) { }

  ngOnInit() {
    this._leaderService.getLeaders().subscribe((leader : Leader[]) =>{
     this.dataSource = new MatTableDataSource<Leader>(leader);
    });
  }
columnNames = ['LeaderName','SpeakingAbilityRating','EngagingRating', 'AuthenticRating','RapportRating', 'buttons',];
dataSource: MatTableDataSource<Leader>
}
