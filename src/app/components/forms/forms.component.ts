import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  results =[];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        hour: '',
        showClosed: false
      })
  }

  onSubimit(): void {
    console.log(this.formGroup.value)
  }

  onClean(): void {
    this.formGroup.reset();
  }

}
