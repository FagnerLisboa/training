import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDoDiaComponent } from './relatorio-do-dia.component';

describe('RelatorioDoDiaComponent', () => {
  let component: RelatorioDoDiaComponent;
  let fixture: ComponentFixture<RelatorioDoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioDoDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
