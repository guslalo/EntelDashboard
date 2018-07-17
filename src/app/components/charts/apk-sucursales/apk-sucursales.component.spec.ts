import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkSucursalesComponent } from './apk-sucursales.component';

describe('ApkSucursalesComponent', () => {
  let component: ApkSucursalesComponent;
  let fixture: ComponentFixture<ApkSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApkSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
