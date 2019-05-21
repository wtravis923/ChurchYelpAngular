import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LeaderratingService } from 'src/app/services/leaderrating.service';
import { Router } from '@angular/router';
import { LeaderService } from 'src/app/services/leader.service';
import { Leader } from 'src/app/models/leader'

@Component({
  selector: 'app-leaderrating-create',
  templateUrl: './leaderrating-create.component.html',
  styleUrls: ['./leaderrating-create.component.css']
})
export class LeaderratingCreateComponent implements OnInit {

  leaderratingForm: FormGroup;
  leaders: Leader[];

  constructor(private _leaderratingService: LeaderratingService, private _form: FormBuilder, private _router: Router, private leaderService: LeaderService) { 
    this.createForm();
  }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe((leaders: Leader[]) => {this.leaders = leaders; });
  }

  createForm() {
    this.leaderratingForm = this._form.group({
    LeaderId: new FormControl,
    LeaderRatingId: new FormControl, 
    SpeakingAbilityRating: new FormControl,
    EngagingRating: new FormControl,
    AuthenticRating: new FormControl,
    RapportRating: new FormControl,
    });
  }

  onSubmit() {
    this._leaderratingService.createLeaderRating(this.leaderratingForm.value).subscribe(data => {
      this._router.navigate(['/leader']);
    });
  }
}

export class SliderFormattingExample {
  formatLabel(value: number | 'auto') {
    if (!value) {
      return 0;
    }

    return value;
  }
}
