import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamawaComponent } from './adamawa.component';

describe('AdamawaComponent', () => {
  let component: AdamawaComponent;
  let fixture: ComponentFixture<AdamawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdamawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdamawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
