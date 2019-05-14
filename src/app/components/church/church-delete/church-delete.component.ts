import { Component, OnInit } from '@angular/core';
import { ChurchService } from 'src/app/services/church.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Church } from 'src/app/models/Church';

@Component({
  selector: 'app-church-delete',
  templateUrl: './church-delete.component.html',
  styleUrls: ['./church-delete.component.css']
})
export class ChurchDeleteComponent implements OnInit {
  church: Church

  constructor(private _churchService: ChurchService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._churchService.getChurch(p.get('id')).subscribe((singleChurch: Church) => {
        this.church =singleChurch;
      });
    });
   }
  
  ngOnInit() {
  }

  onDelete() {
    this._churchService.deleteChurch(this.church.ChurchId).subscribe(() => {
      this._router.navigate(['/church']);
    });
  }

}
