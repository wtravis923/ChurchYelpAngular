import { Component, OnInit } from '@angular/core';
import { ChurchRatingsService } from '../../../services/churchratings.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-church-rating-create',
  templateUrl: './church-rating-create.component.html',
  styleUrls: ['./church-rating-create.component.css']
})
export class ChurchRatingCreateComponent implements OnInit {

  churchRatingForm: FormGroup;

  constructor(private _churchRatingService: ChurchRatingsService, private _form: FormBuilder, private _router: Router) { this.createForm() };

  ngOnInit() {
  }

  createForm() {
    this.churchRatingForm = this._form.group({
      ChurchID: new FormControl,
      CommunityInvolvementRating: new FormControl,
      FriendlyRating: new FormControl,
      FacilityRating: new FormControl,
      MusicRating: new FormControl,
      MessageRating: new FormControl
    });
  }

  onSubmit() {
    this._churchRatingService.createChurchRating(this.churchRatingForm.value).subscribe(data => {
      this._router.navigate(['/church'])
    });
  }
}
