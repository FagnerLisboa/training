import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoDeSenhaComponent } from './validacao-de-senha.component';

describe('ValidacaoDeSenhaComponent', () => {
  let component: ValidacaoDeSenhaComponent;
  let fixture: ComponentFixture<ValidacaoDeSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacaoDeSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacaoDeSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
