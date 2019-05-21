import { Component, OnInit } from '@angular/core';
import { Church } from '../../../models/Church';
import { ChurchRating } from '../../../models/ChurchRating'
import { ChurchService } from 'src/app/services/church.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-church-ListItem',
  templateUrl: './church-ListItem.component.html',
  styleUrls: ['./church-ListItem.component.css'],
})
export class ChurchListItemComponent implements OnInit {

  isAdmin: boolean;

  constructor(private _churchService: ChurchService) { }

  ngOnInit() {
    this. _churchService.getChurches().subscribe((church: Church[]) => {
      this.dataSource = new MatTableDataSource<Church>(church);

    });

    if (localStorage.getItem('userRole') == "Admin") {
    this.isAdmin = true; 
    }
    else {
      this.isAdmin = false;
    }
  }
  columnNames =['ChurchName', 'ChurchCity', 'ChurchState', 'FriendlyRating', 'CommunityInvolvementRating', 'FacilityRating', 'MusicRating', 'MessageRating', 'buttons'];
  dataSource: MatTableDataSource<Church>
}