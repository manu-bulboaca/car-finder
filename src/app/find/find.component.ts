import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {LoaderService} from "../loader/loader.service";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {NgFor, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
  imports: [
    NgIf,
    NgFor,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class FindComponent implements OnInit{
  addressForm = this.fb.group({
    carMaker: [null, Validators.required],
    engine: [null, Validators.required],
    color: [null],
  });

  carMakers!: Array<{name: string, abbreviation: string}>;
  engines!: Array<{name: string, abbreviation: string}>;
  colors!: string[];

  constructor(private fb: FormBuilder, private router: Router, private loaderServoce: LoaderService) {}

  ngOnInit() {
    this.carMakers = this.loaderServoce.retrieveCarMakers();
    this.engines = this.loaderServoce.retrieveEngines();
    this.colors = this.loaderServoce.retrieveColors();
  }

  onSubmit(): void {
    this.router.navigate(['results'])
  }
}
