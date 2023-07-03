import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftOpenComponent } from './lift-open.component';

describe('LiftOpenComponent', () => {
  let component: LiftOpenComponent;
  let fixture: ComponentFixture<LiftOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
