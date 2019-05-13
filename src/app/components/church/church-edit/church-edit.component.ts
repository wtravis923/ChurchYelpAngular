import { Component, OnInit } from '@angular/core';
import { Church } from 'src/app/models/Church';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChurchesService } from 'src/app/services/church.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-church-edit',
  templateUrl: './church-edit.component.html',
  styleUrls: ['./church-edit.component.css']
})
export class ChurchEditComponent implements OnInit {
  
church: Church;

editChurchForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _churchService: ChurchesService,
    private _ar: ActivatedRoute,
    private _router: Router
    ) { 
      this._ar.paramMap.subscribe(p => {
        this._churchService.getChurch(p.get('id')).subscribe((singleChurch: Church) =>{
          this.church = singleChurch;
          this.createForm();
        });
      }):
    }

  ngOnInit() {
  }

}
