import { Component, OnInit } from '@angular/core';
import { ChurchService } from 'src/app/services/church.service';
import { Church } from 'src/app/models/Church';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-church-index',
  templateUrl: './church-index.component.html',
  styleUrls: ['./church-index.component.css']
})
export class ChurchIndexComponent implements OnInit {

  constructor(private _churchService: ChurchService) { }

  columnNames = ['ChurchID', 'ChurchName', 'ChurchCity', 'ChurchState', 'CommunityInvolvementRating', 'FriendlyRating', 'FacilityRating', 'MusicRating', 'MessageRating'];
  dataSource: MatTableDataSource<Church>


  ngOnInit() {
    this._churchService.getChurch().subscribe((church: Church[]) => {
    this.dataSource = new MatTableDataSource<Church>(church);
  });
  }
}
