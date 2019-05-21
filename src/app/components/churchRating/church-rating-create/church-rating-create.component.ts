import { Component, OnInit } from '@angular/core';
import { ChurchRatingsService } from '../../../services/churchratings.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChurchService } from 'src/app/services/church.service';
import { Church } from 'src/app/models/Church'

@Component({
  selector: 'app-church-rating-create',
  templateUrl: './church-rating-create.component.html',
  styleUrls: ['./church-rating-create.component.css']
})
export class ChurchRatingCreateComponent implements OnInit {

  churchRatingForm: FormGroup;
  churches: Church[];

  constructor(private _churchRatingService: ChurchRatingsService, private _form: FormBuilder, private _router: Router, private churchService: ChurchService) { this.createForm(); }

  ngOnInit() {
    this.churchService.getChurches().subscribe((churches: Church[]) => {this.churches = churches; });
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

export class SliderFormattingExample {
  formatLabel(value: number | 'auto') {
    if (!value) {
      return 0;
    }

    return value;
  }
}
