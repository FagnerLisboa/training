import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoBissextoComponent } from './ano-bissexto.component';

describe('AnoBissextoComponent', () => {
  let component: AnoBissextoComponent;
  let fixture: ComponentFixture<AnoBissextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnoBissextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoBissextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
