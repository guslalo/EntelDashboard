import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesVersionAppComponent } from './devices-version-app.component';

describe('DevicesVersionAppComponent', () => {
  let component: DevicesVersionAppComponent;
  let fixture: ComponentFixture<DevicesVersionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesVersionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesVersionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
