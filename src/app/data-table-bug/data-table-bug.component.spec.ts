import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableBugComponent } from './data-table-bug.component';

describe('DataTableBugComponent', () => {
  let component: DataTableBugComponent;
  let fixture: ComponentFixture<DataTableBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
