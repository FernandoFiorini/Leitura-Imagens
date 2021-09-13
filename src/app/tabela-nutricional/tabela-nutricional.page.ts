import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabela-nutricional',
  templateUrl: './tabela-nutricional.page.html',
  styleUrls: ['./tabela-nutricional.page.scss'],
})
export class TabelaNutricionalPage implements OnInit {

  legume: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const me = this;

    me.legume = JSON.parse(me.route.snapshot.paramMap.get('item'));

  }
}





