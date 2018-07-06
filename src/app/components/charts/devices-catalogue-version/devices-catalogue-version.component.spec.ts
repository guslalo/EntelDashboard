import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesCatalogueVersionComponent } from './devices-catalogue-version.component';

describe('DevicesCatalogueVersionComponent', () => {
  let component: DevicesCatalogueVersionComponent;
  let fixture: ComponentFixture<DevicesCatalogueVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesCatalogueVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesCatalogueVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
