import { Component, OnInit } from '@angular/core';
import { AutomovelService } from '../automovel.service';
import { Automovel } from '../automovel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automovel-list',
  templateUrl: './automovel-list.component.html',
  styleUrls: ['./automovel-list.component.css']
})
export class AutomovelListComponent implements OnInit {
  title = 'Automoveis';
  automoveis: Automovel[] = [];

  constructor(
    private service: AutomovelService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAutomoveis();
  }

  getAutomoveis(): void {
    this.service.getAutomoveis().then(automoveis => this.automoveis = automoveis);
  }

  onCreate(): void {
    this.router.navigate(['automovel', 'new']);
  }

  onDelete(automovel: Automovel): void {
    this.automoveis = this.automoveis.filter(auto => auto !== automovel);
    this.service.delete(automovel).subscribe();
  }
}
