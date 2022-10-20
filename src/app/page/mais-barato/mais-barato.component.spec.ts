import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisBaratoComponent } from './mais-barato.component';

describe('MaisBaratoComponent', () => {
  let component: MaisBaratoComponent;
  let fixture: ComponentFixture<MaisBaratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisBaratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisBaratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
