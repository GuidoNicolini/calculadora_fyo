import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaFuturoComponent } from './vista-futuro.component';

describe('VistaFuturoComponent', () => {
  let component: VistaFuturoComponent;
  let fixture: ComponentFixture<VistaFuturoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaFuturoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaFuturoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
