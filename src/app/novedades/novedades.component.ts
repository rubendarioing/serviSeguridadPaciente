import { Component, OnInit } from '@angular/core';
import { NovedadService } from './shared/novedad.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css'],
  providers:[NovedadService]
})
export class NovedadesComponent implements OnInit {

  constructor(private novedadService : NovedadService) { }

  ngOnInit() {
  }

}
