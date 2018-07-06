import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDesconectadosComponent } from './top-desconectados.component';

describe('TopDesconectadosComponent', () => {
  let component: TopDesconectadosComponent;
  let fixture: ComponentFixture<TopDesconectadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDesconectadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDesconectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
