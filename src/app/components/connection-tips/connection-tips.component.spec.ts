import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionTipsComponent } from './connection-tips.component';

describe('ConnectionTipsComponent', () => {
  let component: ConnectionTipsComponent;
  let fixture: ComponentFixture<ConnectionTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
