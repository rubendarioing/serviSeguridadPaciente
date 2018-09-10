import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NovedadService } from '../shared/novedad.service';


@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit {

  constructor(private novedadService : NovedadService) { }

  ngOnInit() {
  }

  resetForm(form: NgForm)
}
