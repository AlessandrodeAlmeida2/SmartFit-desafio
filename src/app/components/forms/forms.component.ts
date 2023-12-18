import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitService } from '../../services/get-unit.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  results =[];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitService) {}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data));
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
