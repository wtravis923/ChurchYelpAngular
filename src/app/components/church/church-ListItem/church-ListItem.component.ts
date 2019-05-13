import { Component, OnInit } from '@angular/core';
import { ChurchService } from '../../../services/church.service';
import { Church } from '../../../models/Church';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-church-List-Item',
  templateUrl: './church-List-Item.component.html',
  styleUrls: ['./church-List-Item.component.css']
})
export class ChurchListItemComponent implements OnInit {

  constructor(private _churchService: ChurchService) { }

  ngOnInit() {
    this. _churchService.getChurch().subscribe((churches: Church[]) => {
      this.dataSource = new MatTableDataSource<Church>(churches);
    });
  }
  columnNames =['details', 'ChurchId', 'ChurchName', 'ChurchCity', 'ChurchState', 'buttons'];
  dataSource: MatTableDataSource<Church>
}
