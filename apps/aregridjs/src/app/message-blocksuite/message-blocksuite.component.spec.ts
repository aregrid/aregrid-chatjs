import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageBlocksuiteComponent } from './message-blocksuite.component';

describe('MessageBlocksuiteComponent', () => {
  let component: MessageBlocksuiteComponent;
  let fixture: ComponentFixture<MessageBlocksuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBlocksuiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageBlocksuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
