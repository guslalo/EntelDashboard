import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesDisconnectedComponent } from './devices-disconnected.component';

describe('DevicesDisconnectedComponent', () => {
  let component: DevicesDisconnectedComponent;
  let fixture: ComponentFixture<DevicesDisconnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesDisconnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesDisconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
