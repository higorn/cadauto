import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { AutomovelService } from '../automovel.service';
import { Automovel } from '../automovel';

@Component({
  selector: 'app-automovel-detail',
  templateUrl: './automovel-detail.component.html',
  styleUrls: ['./automovel-detail.component.css']
})
export class AutomovelDetailComponent implements OnInit {
  automovel: Automovel;
  automovelForm: FormGroup;
  title: string;
  isNew = false;

  constructor(
    private route: ActivatedRoute,
    private service: AutomovelService,
    private location: Location,
    private fb: FormBuilder,
  ) {
    this.automovelForm = this.fb.group({
      'id' : [undefined, null],
      'marca' : [undefined, Validators.required],
      'modelo' : [undefined, Validators.required],
      'ano' : [undefined, Validators.required],
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        if (params['id'] === 'new') {
          this.isNew = true;
          this.title = 'Cadastro de novo automóvel';
          return Promise.resolve(new Automovel());
        }
        this.title = 'Detalhes do automóvel';
        return this.service.get(+params['id']);
      })
      .subscribe(automovel => {
        this.automovel = automovel;
        this.automovelForm.controls['id'].setValue(automovel.id);
        this.automovelForm.controls['marca'].setValue(automovel.marca);
        this.automovelForm.controls['modelo'].setValue(automovel.modelo);
        this.automovelForm.controls['ano'].setValue(automovel.ano);
      });
  }

  onBack(): void {
    this.location.back();
  }

  onSave(): void {
    if (this.isNew) {
      this.service.create(this.automovelForm.value).subscribe(() => this.location.back());
    } else {
      this.service.update(this.automovelForm.value).subscribe(() => this.location.back());
    }
  }
}
