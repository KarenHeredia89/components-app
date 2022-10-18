import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [`
    button {
      margin-right: 10px;
    }
  `]
})
export class ClassComponent implements OnInit {

  alerta: string = "alert-danger";
  loading: boolean = false;

  propiedades: any = {
    danger: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {

    this.loading = true;

    setTimeout(() => this.loading = false, 3000);

  };

}
