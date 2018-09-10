import { Injectable } from '@angular/core';

import { Novedad } from './novedad.model';

@Injectable()
export class NovedadService {

  selectedNovedad : Novedad;
  constructor() { }
}
