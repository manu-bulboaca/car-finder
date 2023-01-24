import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
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
