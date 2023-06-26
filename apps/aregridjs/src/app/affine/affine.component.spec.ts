import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFFiNEBlocksuiteComponent } from './affine.component';

describe('AFFiNEBlocksuiteComponent', () => {
  let component: AFFiNEBlocksuiteComponent;
  let fixture: ComponentFixture<AFFiNEBlocksuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AFFiNEBlocksuiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFFiNEBlocksuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
