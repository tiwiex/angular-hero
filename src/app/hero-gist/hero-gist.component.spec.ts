import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGistComponent } from './hero-gist.component';

describe('HeroGistComponent', () => {
  let component: HeroGistComponent;
  let fixture: ComponentFixture<HeroGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
