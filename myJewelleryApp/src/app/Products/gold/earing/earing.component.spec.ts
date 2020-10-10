import { ComponentFixture, TestBed } from '@angular/core/testing';

import { earingComponent } from './earing.component';

describe('earingComponent', () => {
  let component: earingComponent;
  let fixture: ComponentFixture<earingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [earingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(earingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
