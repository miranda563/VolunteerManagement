import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprojectComponent } from './cproject.component';

describe('CprojectComponent', () => {
  let component: CprojectComponent;
  let fixture: ComponentFixture<CprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
