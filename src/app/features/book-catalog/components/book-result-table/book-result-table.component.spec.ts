import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResultTableComponent } from './book-result-table.component';

describe('BookResultTableComponent', () => {
  let component: BookResultTableComponent;
  let fixture: ComponentFixture<BookResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookResultTableComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
