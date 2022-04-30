import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalhes2Component } from './detalhes2.component';

describe('Detalhes2Component', () => {
  let component: Detalhes2Component;
  let fixture: ComponentFixture<Detalhes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalhes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalhes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
