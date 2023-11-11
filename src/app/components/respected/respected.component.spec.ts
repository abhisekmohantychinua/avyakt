import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectedComponent } from './respected.component';

describe('RespectedComponent', () => {
  let component: RespectedComponent;
  let fixture: ComponentFixture<RespectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespectedComponent]
    });
    fixture = TestBed.createComponent(RespectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
