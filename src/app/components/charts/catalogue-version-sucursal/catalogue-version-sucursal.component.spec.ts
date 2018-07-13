import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueVersionSucursalComponent } from './catalogue-version-sucursal.component';

describe('CatalogueVersionSucursalComponent', () => {
  let component: CatalogueVersionSucursalComponent;
  let fixture: ComponentFixture<CatalogueVersionSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueVersionSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueVersionSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
