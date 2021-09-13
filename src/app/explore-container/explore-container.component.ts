import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() { }

  abrirLeitor() {

    const me = this;
    console.log("teste")
    me.router.navigate(["leitura-imagem"]);

  }

}
