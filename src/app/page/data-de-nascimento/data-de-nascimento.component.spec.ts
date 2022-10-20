import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDeNascimentoComponent } from './data-de-nascimento.component';

describe('DataDeNascimentoComponent', () => {
  let component: DataDeNascimentoComponent;
  let fixture: ComponentFixture<DataDeNascimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDeNascimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDeNascimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
