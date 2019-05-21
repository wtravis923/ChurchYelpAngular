import { Component, OnInit } from '@angular/core';
import { LeaderRating } from 'src/app/models/leaderrating';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leaderrating-edit',
  templateUrl: './leaderrating-edit.component.html',
  styleUrls: ['./leaderrating-edit.component.css']
})
export class LeaderRatingEditComponent implements OnInit {

  leaderrating: LeaderRating;

  editLeaderRatingForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _leaderratingService: LeaderratingService,
    private _ar: ActivatedRoute,
    private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._leaderratingService.getLeaderRating(p.get('id')).subscribe((singleLeaderRating: LeaderRating) => {
        this.leaderrating = singleLeaderRating;
        this.createForm();
      });

    });
  }



  ngOnInit() {
  }

  createForm() {
    this.editLeaderRatingForm = this._form.group({
      LeaderId: new FormControl(this.leaderrating.LeaderId),
      LeaderRatingId: new FormControl(this.leaderrating.LeaderRatingId),
      SpeakingAbilityRating: new FormControl(this.leaderrating.SpeakingAbilityRating),
      AuthenticRating: new FormControl(this.leaderrating.AuthenticRating),
      RapportRating: new FormControl(this.leaderrating.RapportRating)
    });
  }

  onSubmit(form) {
    const updateLeaderRating: LeaderRating = {
      LeaderId: form.value.LeaderId,
      LeaderRatingId: form.value.LeaderRatingId,
      SpeakingAbilityRating: form.value.SpeakingAbilityRating,
      AuthenticRating: form.value.AuthenticRating
    };

    this._leaderratingService.updateLeaderRating(updateLeaderRating).subscribe(d => {
      this._router.navigate(['/leaderrating']);
    })
  }

}

