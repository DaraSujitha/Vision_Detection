import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletboxComponent } from './palletbox.component';

describe('PalletboxComponent', () => {
  let component: PalletboxComponent;
  let fixture: ComponentFixture<PalletboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
