import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliverComponent } from './sliver.component';

describe('SliverComponent', () => {
  let component: SliverComponent;
  let fixture: ComponentFixture<SliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
