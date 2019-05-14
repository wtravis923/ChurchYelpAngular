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
