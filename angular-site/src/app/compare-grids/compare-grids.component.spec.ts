import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareGridsComponent } from './compare-grids.component';

describe('CompareGridsComponent', () => {
  let component: CompareGridsComponent;
  let fixture: ComponentFixture<CompareGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
