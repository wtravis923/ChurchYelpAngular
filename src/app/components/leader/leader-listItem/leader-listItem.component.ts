import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../../../services/leader.service';
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
    this._leaderService.getLeader().subscribe((leader : Leader[]) =>{
     this.dataSource = new MatTableDataSource<Leader>(leader);
    });
  }
columnNames = ['LeaderID', 'LeaderName',];
dataSource: MatTableDataSource<Leader>
}
