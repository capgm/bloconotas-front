import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCreateComponent } from './nota-create.component';

describe('NotaCreateComponent', () => {
  let component: NotaCreateComponent;
  let fixture: ComponentFixture<NotaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotaCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
