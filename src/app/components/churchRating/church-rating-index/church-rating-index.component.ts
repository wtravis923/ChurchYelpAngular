import { Component, OnInit } from '@angular/core';
import { ChurchRatingsService } from '../../../services/churchratings.service'
import { ChurchRating } from '../../../models/ChurchRating'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-church-rating-index',
  templateUrl: './church-rating-index.component.html',
  styleUrls: ['./church-rating-index.component.css']
})
export class ChurchRatingIndexComponent implements OnInit {

  constructor(private _churchRatingService: ChurchRatingsService) { }

  
  ngOnInit() {
    this._churchRatingService.getChurchRatings().subscribe((churchRating: ChurchRating[]) => {this.dataSource = new MatTableDataSource<ChurchRating>(churchRating)
    });
  }

  columnNames = ['churchRatingID', 'userID', 'churchID', 'CommunityInvolvementRating', 'FriendlyRating', 'FacilityRating', 'MusicRating', 'MessageRating'];
  
  dataSource: MatTableDataSource<ChurchRating>
}
