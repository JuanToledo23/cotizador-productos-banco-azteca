import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsAbarrotesComponent } from './tickets-abarrotes.component';

describe('TicketsAbarrotesComponent', () => {
  let component: TicketsAbarrotesComponent;
  let fixture: ComponentFixture<TicketsAbarrotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsAbarrotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsAbarrotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
