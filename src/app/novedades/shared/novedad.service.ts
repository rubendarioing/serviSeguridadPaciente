import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




import { Novedad } from './novedad.model';

@Injectable()
export class NovedadService {

  selectedNovedad : Novedad = new Novedad();
  constructor(private http: Http) { }

  postNovedad(nov: Novedad){
    var body = JSON.stringify(nov);
    var headerOption = new Headers({'content-type':'application/json'});
    var requestOptions = new RequestOptions({method:RequestMethod.Post, headers: headerOption });
    return this.http.post('http://rubendarioing-001-site1.htempurl.com/api/Pacientes', body, requestOptions).pipe(map(x=>x.json())) ;
  }

}
