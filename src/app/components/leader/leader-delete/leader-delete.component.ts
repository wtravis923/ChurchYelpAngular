import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Leader} from 'src/app/models/leader';


@Component({
  selector: 'app-leader-delete',
  templateUrl: './leader-delete.component.html',
  styleUrls: ['./leader-delete.component.css']
})
export class LeaderDeleteComponent implements OnInit {

leader: Leader;

  constructor(private _leaderService: LeaderService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._leaderService.getLeader(p.get('id')).subscribe((singleLeader: Leader) =>{
        this.leader = singleLeader;
      });
    });

    }

  ngOnInit() {
  }
  onDelete() {
    this._leaderService.deleteLeader(this.leader.LeaderID).subscribe(() =>{
      this._router.navigate(['/leader']);
    });
  }

}
