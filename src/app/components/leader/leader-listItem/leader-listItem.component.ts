import { Component, OnInit } from '@angular/core';
import {LeaderService} from 'src/app/services/leader.service';
import {Leader} from '../../../models/Leader';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-leader-index',
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
<<<<<<< HEAD
columnNames = ['LeaderID', 'LeaderName','SpeakingAbilityRating','EngagingRating', 'AuthenticRating','RapportRating', 'buttons',];
=======

columnNames = [ 'LeaderName','SpeakingAbilityRating','EngagingRating', 'AuthenticRating','RapportRating', 'buttons',];

>>>>>>> 0c6dfde864299c99dcade6158e4071def75aab55
dataSource: MatTableDataSource<Leader>
}
