import { Component, OnInit } from '@angular/core';
import { NovedadService } from'../shared/novedad.service';

@Component({
  selector: 'app-novedad-list',
  templateUrl: './novedad-list.component.html',
  styleUrls: ['./novedad-list.component.css']
})
export class NovedadListComponent implements OnInit {

  constructor(private novedadService : NovedadService) { }

  ngOnInit() {
  }

}
