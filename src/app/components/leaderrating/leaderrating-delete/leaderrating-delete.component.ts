import { Component, OnInit } from '@angular/core';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaderRating } from 'src/app/models/leaderrating';

@Component({
  selector: 'app-leaderrating-delete',
  templateUrl: './leaderrating-delete.component.html',
  styleUrls: ['./leaderrating-delete.component.css']
})
export class LeaderRatingDeleteComponent implements OnInit {
  leaderrating: LeaderRating;
  constructor(private _leaderratingService: LeaderratingService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._leaderratingService.getLeaderRating(p.get('id')).subscribe((singleLeaderRating: LeaderRating) => {
        this.leaderrating = singleLeaderRating;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._leaderratingService.deleteLeaderRating(this.leaderrating.LeaderId).subscribe(() => {
      this._router.navigate(['/leaderratings']);
    });
  }

}
