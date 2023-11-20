import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescuboComponent } from './detallescubo.component';

describe('DetallescuboComponent', () => {
  let component: DetallescuboComponent;
  let fixture: ComponentFixture<DetallescuboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallescuboComponent]
    });
    fixture = TestBed.createComponent(DetallescuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
