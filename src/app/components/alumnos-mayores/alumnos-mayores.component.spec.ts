import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosMayoresComponent } from './alumnos-mayores.component';

describe('AlumnosMayoresComponent', () => {
  let component: AlumnosMayoresComponent;
  let fixture: ComponentFixture<AlumnosMayoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosMayoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosMayoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
