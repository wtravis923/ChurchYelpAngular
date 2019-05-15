import { Component, OnInit } from '@angular/core';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { ActivatedRoute } from '@angular/router';
import { LeaderRating } from 'src/app/models/leaderrating';

@Component({
  selector: 'app-leaderrating-delete',
  templateUrl: './leaderrating-delete.component.html',
  styleUrls: ['./leaderrating-delete.component.css']
})
export class LeaderratingDeleteComponent implements OnInit {

  constructor(private _leaderratingService: LeaderratingService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._leaderratingService.getLeaderRating(p.get('id').subscribe((singleLeaderRating: LeaderRating) => {
        this.leaderrating = singleLeaderRating;
      }));
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._leaderratingService.updateLeaderRating(this._leaderrating.LeaderId).sibscribe(() => {
      this._router.navigate(['/leaderratings']);
    });
  }

}
