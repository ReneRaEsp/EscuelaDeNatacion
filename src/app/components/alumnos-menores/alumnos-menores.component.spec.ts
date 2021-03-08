import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosMenoresComponent } from './alumnos-menores.component';

describe('AlumnosMenoresComponent', () => {
  let component: AlumnosMenoresComponent;
  let fixture: ComponentFixture<AlumnosMenoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosMenoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
