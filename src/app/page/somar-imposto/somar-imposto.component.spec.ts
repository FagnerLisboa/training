import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomarImpostoComponent } from './somar-imposto.component';

describe('SomarImpostoComponent', () => {
  let component: SomarImpostoComponent;
  let fixture: ComponentFixture<SomarImpostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomarImpostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomarImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
