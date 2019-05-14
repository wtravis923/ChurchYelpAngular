import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Church } from 'src/app/models/Church';
import { ChurchService } from 'src/app/services/church.service';

@Component({
  selector: 'app-church-detail',
  templateUrl: './church-detail.component.html',
  styleUrls: ['./church-detail.component.css']
})
export class ChurchDetailComponent implements OnInit {
  church: Church;
  constructor(private _activatedRoute: ActivatedRoute, private _churchService: ChurchService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._churchService.getChurch(routeData.get('id')).subscribe((singleChurch: Church) => {
        this.church = singleChurch;
      })
    });
  }
}
