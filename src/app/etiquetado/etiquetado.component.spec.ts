import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetadoComponent } from './etiquetado.component';

describe('EtiquetadoComponent', () => {
  let component: EtiquetadoComponent;
  let fixture: ComponentFixture<EtiquetadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
