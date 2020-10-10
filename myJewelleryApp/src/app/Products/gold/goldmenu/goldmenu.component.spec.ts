import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldmenuComponent } from './goldmenu.component';

describe('GoldmenuComponent', () => {
  let component: GoldmenuComponent;
  let fixture: ComponentFixture<GoldmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
