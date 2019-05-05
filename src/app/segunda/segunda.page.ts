import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  argumento = null;

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit() {

    this.argumento = this.activateRouter.snapshot.paramMap.get('id');

  }

}
