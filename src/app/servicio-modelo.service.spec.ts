import { TestBed } from '@angular/core/testing';

import { ServicioModeloService } from './servicio-modelo.service';

describe('ServicioModeloService', () => {
  let service: ServicioModeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioModeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
