import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteAiComponent } from './note-ai.component';

describe('NoteAiComponent', () => {
  let component: NoteAiComponent;
  let fixture: ComponentFixture<NoteAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteAiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
