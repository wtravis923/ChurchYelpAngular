import { Component, OnInit } from '@angular/core';
import { ChurchesService } from '../../../services/church.service';
import { Church } from '../../../models/Church';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-church-index',
  templateUrl: './church-index.component.html',
  styleUrls: ['./church-index.component.css']
})
export class ChurchIndexComponent implements OnInit {

  constructor(private _churchService: ChurchesService) { }

  ngOnInit() {
    this. _churchService.getChurches().subscribe((churches: Church[]) => {
      this.dataSource = new MatTableDataSource<Church>(churches);
    });
  }
  columnNames =['details', 'ChurchId', 'ChurchName', 'ChurchCity', 'ChurchState', 'buttons'];
  dataSource: MatTableDataSource<Church>
}
