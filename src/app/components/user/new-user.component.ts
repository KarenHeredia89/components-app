import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  constructor( private router:ActivatedRoute ) { 

    this.router.parent?.params.subscribe( parameters => {
      
      console.log('Ruta hija - Usuario nuevo');
      console.log(parameters);

    })
  }

  ngOnInit(): void {
  }

}
