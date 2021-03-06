import { Component, OnInit } from '@angular/core';
import { Church } from 'src/app/models/Church';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ChurchService } from 'src/app/services/church.service';
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
    private _churchService: ChurchService,
    private _ar: ActivatedRoute,
    private _router: Router
    ) { 
      this._ar.paramMap.subscribe(p => {
        this._churchService.getChurch(p.get('id')).subscribe((singleChurch: Church) =>{
          this.church = singleChurch;
          this.createForm();
        });
      });
    }

  ngOnInit() {
  }
  
  createForm() {
    this.editChurchForm = this._form.group({
      ChurchID: new FormControl(this.church.ChurchID),
      ChurchName: new FormControl(this.church.ChurchName),
      ChurchCity: new FormControl(this.church.ChurchCity),
      ChurchState: new FormControl(this.church.ChurchState)
    });
  }

  onSubmit(form) {
    const updateChurch: Church = {
      ChurchID: form.value.ChurchID,
      ChurchName: form.value.ChurchName,
      ChurchCity: form.value.ChurchCity,
      ChurchState: form.value.ChurchState
    };

    this._churchService.updateChurch(updateChurch).subscribe(d => {this._router.navigate(['/church']);
  })
  }
}
