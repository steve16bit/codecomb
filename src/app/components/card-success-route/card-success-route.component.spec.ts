import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuccessRouteComponent } from './card-success-route.component';

describe('CardSuccessRouteComponent', () => {
  let component: CardSuccessRouteComponent;
  let fixture: ComponentFixture<CardSuccessRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSuccessRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSuccessRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
