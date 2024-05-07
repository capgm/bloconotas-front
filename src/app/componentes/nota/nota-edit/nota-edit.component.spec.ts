import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEditComponent } from './nota-edit.component';

describe('NotaEditComponent', () => {
  let component: NotaEditComponent;
  let fixture: ComponentFixture<NotaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
