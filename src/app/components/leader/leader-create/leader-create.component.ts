import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../../../services/leader.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Leader} from '../../../models/leader';


@Component({
  selector: 'app-leader-create',
  templateUrl: './leader-create.component.html',
  styleUrls: ['./leader-create.component.css']
})
export class LeaderCreateComponent implements OnInit {

  leader:Leader;
  leaderForm: FormGroup;

  constructor(private _leaderService: LeaderService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.leaderForm = this._form.group({
      LeaderName: new FormControl
    });
  }

  onSubmit() {
    this._leaderService.createLeader (this.leaderForm.value).subscribe(data => {
      this._router.navigate(['/leader']);
    });
  }

}
