import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NovedadService } from '../shared/novedad.service';




@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']

})
export class NovedadComponent implements OnInit {

  countries = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];

  Nits =[];
  
  tipo = [];

  constructor(private novedadService: NovedadService) { 
    this.novedadService.getTipoDocumentos().subscribe(data =>{
      this.tipo=data;
    });
    this.Nits = [
      {id:"CC",name:"CC"},
      {id:"TI",name:"TI"},
      {id:"NIT",name:"NIT"},
      {id:"PA",name:"PA"},
    ];

  }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.novedadService.selectedNovedad = {
        PacID: null,
        PacNom: '',
        PacNom2: '',
        PacApellido: '',
        PacApellido1: '',
        PacNit: null,
        PacTipoIden:'',
        PacFechaReg : null        
      }     
    }
  }

  onSubmit(form: NgForm) {
    this.novedadService.postNovedad(form.value)
      .subscribe(data => {
        this.resetForm(form);
      });
  }
}
