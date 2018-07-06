import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdscreenComponent } from './adscreen.component';

describe('AdscreenComponent', () => {
  let component: AdscreenComponent;
  let fixture: ComponentFixture<AdscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
