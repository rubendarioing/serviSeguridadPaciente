import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NovedadService } from '../shared/novedad.service';




@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']

})
export class NovedadComponent implements OnInit {

  Sedes = [];
  Nits = [];

  //tipo = [];

  constructor(private novedadService: NovedadService) {
    /* this.novedadService.getTipoDocumentos().subscribe(data =>{
       this.tipo=data;
     });*/
    this.Nits = [
      { id: "0", name: "CC" },
      { id: "1", name: "TI" },
      { id: "2", name: "NIT" },
      { id: "3", name: "PA" }
    ];
    this.Sedes = [
      { id: "0", name: "116" },
      { id: "1", name: "Kenedy" },
      { id: "2", name: "IMEF" },
      { id: "3", name: "Calle 26" }
    ]
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
        PacTipoIden: "CC",
        PacFechaReg: new Date(),
        PacIdSede: null,
        PacEdad:null,
        PacEmail:''
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
