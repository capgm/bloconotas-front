import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaViewComponent } from './nota-view.component';

describe('NotaViewComponent', () => {
  let component: NotaViewComponent;
  let fixture: ComponentFixture<NotaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
