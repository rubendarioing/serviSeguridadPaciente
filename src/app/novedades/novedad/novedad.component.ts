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
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null){
    form.reset();
    this.novedadService.selectedNovedad={
      PacID:null,
      PacNom:'',
      PacNom2:'',
      PacApellido : '',
      PacApellido1 :'',
      PacNit:null
    }   
  }
  }
}
