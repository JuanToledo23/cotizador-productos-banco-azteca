import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionDespuesEntregaComponent } from './cancelacion-despues-entrega.component';

describe('CancelacionDespuesEntregaComponent', () => {
  let component: CancelacionDespuesEntregaComponent;
  let fixture: ComponentFixture<CancelacionDespuesEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelacionDespuesEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelacionDespuesEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
