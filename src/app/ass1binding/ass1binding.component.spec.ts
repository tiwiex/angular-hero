import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass1bindingComponent } from './ass1binding.component';

describe('Ass1bindingComponent', () => {
  let component: Ass1bindingComponent;
  let fixture: ComponentFixture<Ass1bindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass1bindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass1bindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
