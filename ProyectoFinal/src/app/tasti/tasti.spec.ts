import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastiComponent } from './tasti.component';

describe('TastiComponent', () => {
  let component: TastiComponent;
  let fixture: ComponentFixture<TastiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TastiComponent]
    });
    fixture = TestBed.createComponent(TastiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
