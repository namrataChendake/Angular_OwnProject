import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglasComponent } from './banglas.component';

describe('BanglasComponent', () => {
  let component: BanglasComponent;
  let fixture: ComponentFixture<BanglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanglasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
