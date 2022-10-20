import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerStringComponent } from './ler-string.component';

describe('LerStringComponent', () => {
  let component: LerStringComponent;
  let fixture: ComponentFixture<LerStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LerStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
