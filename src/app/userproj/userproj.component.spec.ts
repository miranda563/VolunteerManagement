import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprojComponent } from './userproj.component';

describe('UserprojComponent', () => {
  let component: UserprojComponent;
  let fixture: ComponentFixture<UserprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
