import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
  ) {
    this.signInForm = new FormGroup({
      firstName: new FormControl(),
      lastName : new FormControl(),
      password: new FormControl(),
      email : new FormControl()
    })
   }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      firstName: new FormControl(),
      lastName : new FormControl(),
      password: new FormControl(),
      email : new FormControl()
    })
  }

  submit() {
    console.log("Saving User Input Data!!!")
    this.dialogRef.close(this.signInForm.value)
  }
}
