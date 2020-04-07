import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewComponent } from './latest-new.component';

describe('LatestNewComponent', () => {
  let component: LatestNewComponent;
  let fixture: ComponentFixture<LatestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
