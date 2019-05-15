import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderrating-create',
  templateUrl: './leaderrating-create.component.html',
  styleUrls: ['./leaderrating-create.component.css']
})
export class LeaderratingCreateComponent implements OnInit {

  leaderratingForm: FormGroup;

  constructor(private _leaderratingService: LeaderratingService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();

  }

  ngOnInit() {
  }

  createForm() {
    this.leaderratingForm = this._form.group({
    LeaderId: new FormControl,
    LeaderRatingid: new FormControl, 
    SpeakingAbilityRating: new FormControl,
    EngagingRating: new FormControl,
    AuthenticRating: new FormControl,
    RapportRating: new FormControl,
    });
  }
  onSubmit() {
    this._leaderratingService.createLeaderRating(this.leaderratingForm.value).subscribe(date => {
      this._router.navigate(['/leaderratings']);
    });
  }
}
export class SliderFormattingExample {
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
