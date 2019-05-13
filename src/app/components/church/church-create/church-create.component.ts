import { Component, OnInit } from '@angular/core';
import { ChurchesService } from '../../../services/church.service';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-church-create',
  templateUrl: './church-create.component.html',
  styleUrls: ['./church-create.component.css']
})
export class ChurchCreateComponent implements OnInit {
  churchForm: FormGroup;

  constructor(private _churchService: ChurchesService, private _form: FormBuilder, private _router: Router ) {
    this.createForm();
   }

  ngOnInit() {
  }
createForm() {
  this.churchForm = this._form.group({
    ChurchName: new FormControl,
    ChurchCity: new FormControl,
    ChurchState: new FormControl
  });
}
onSubmit() {
  this._churchService.createChurch(this.churchForm.value).subscribe(data => {
    this._router.navigate(['/churches']);
  });
}
}
