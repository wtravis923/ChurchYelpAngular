import { Component, OnInit } from '@angular/core';
import { Leader } from 'src/app/models/Leader';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LeaderService } from 'src/app/services/leader.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-leader-edit',
  templateUrl: './leader-edit.component.html',
  styleUrls: ['./leader-edit.component.css']
})
export class LeaderEditComponent implements OnInit {

  leader:Leader;

editLeaderForm: FormGroup;

  constructor(private _form:FormBuilder,
    private _leaderService: LeaderService,
    private _ar: ActivatedRoute,
    private _router: Router
    ) {
    this._ar.paramMap.subscribe(p => {
        this._leaderService.getLeader(p.get('id')).subscribe((singleLeader: Leader) => {
          this.leader= singleLeader;
          this.createForm();
        });
      });
     }

  ngOnInit() {
  }

  createForm() {
    this.editLeaderForm = this._form.group({
      LeaderID: new FormControl(this.leader.LeaderID),
    LeaderName: new FormControl(this.leader.LeaderName),

  });
  }

  onSubmit(form) {
    const updateLeader:Leader = {
      LeaderID: form.value.LeaderID,
      LeaderName: form.value.LeaderName
    };
    this._leaderService.updateLeader(updateLeader).subscribe(d => {
      this._router.navigate(['/leader']);
    })
  }

}
