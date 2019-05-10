import { Component, OnInit } from '@angular/core';
import { ChurchService } from 'src/app/services/church.service';
import { Church } from 'src/app/models/Church';

@Component({
  selector: 'app-church-index',
  templateUrl: './church-index.component.html',
  styleUrls: ['./church-index.component.css']
})
export class ChurchIndexComponent implements OnInit {

  constructor(private _churchService: ChurchService) { }

  ngOnInit() {
    this._churchService.getChurch().subscribe((church: Church[]) => {});
  }
}
