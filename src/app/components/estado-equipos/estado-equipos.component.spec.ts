import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoEquiposComponent } from './estado-equipos.component';

describe('EstadoEquiposComponent', () => {
  let component: EstadoEquiposComponent;
  let fixture: ComponentFixture<EstadoEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
