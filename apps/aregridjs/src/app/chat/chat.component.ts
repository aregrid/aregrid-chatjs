import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AFFiNEComponent } from '../affine/affine.component';
import { HeaderComponent } from './header/header.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatHistoryMock, ChatMessage } from './chat-history-mock';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserService, User } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { Workspace, WorkspaceService } from '../services/workspace.service';
@Component({
  selector: 'aregrid-chat',
  standalone: true,
  imports: [
    CommonModule,
    AFFiNEComponent,
    HeaderComponent,
    ChatMessageComponent,
    FooterComponent,
    SidebarComponent,
    FormsModule,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  // chatMessages: ChatMessage[] = [];
  workspace: Workspace = {
    id: '',
    avatar: '',
    name: '',
    subtitle: '',
    chatMessages: [],
  };

  @ViewChild('chatBottom') chatBottom!: ElementRef;
  currentIndex = 0;
  newMessage = '';
  timer: any;
  user!: User;

  constructor(
    private userService: UserService,
    private workspaceService: WorkspaceService
  ) {}
  ngOnInit() {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });

    // const messages = ChatHistoryMock.getMessages();

    // this.timer = setInterval(() => {
    //   if (this.currentIndex < messages.length) {
    //     const newMessage = messages[this.currentIndex];
    //     this.chatMessages.push(newMessage);
    //     this.currentIndex++;
    //     // 调用滚动方法
    //     this.scrollToBottom();
    //   } else {
    //     clearInterval(this.timer);
    //   }
    // }, 500);
    this.workspaceService.currentWorkspace$.subscribe((workspaceId) => {
      const workspace = this.workspaceService.getWorkspaceById(workspaceId);
      console.log(`current workspace: ${workspace?.name}`);
      if (workspace) {
        this.workspace = workspace;
      }
      // this.chatMessages = this.workspace ? this.workspace.chatMessages : [];
    });
  }
  sendMessage(chatMessageType?: 'text' | 'affine') {
    if (chatMessageType === 'affine') {
      this.workspace?.chatMessages?.push({
        content: this.newMessage,
        userName: this.user.name,
        userAvatar: this.user.avatar,
        type: 'affine',
      });
    } else {
      this.workspace?.chatMessages?.push({
        content: this.newMessage || 'hello',
        userName: this.user.name,
        userAvatar: this.user.avatar,
        type: 'text',
      });
    }

    this.newMessage = '';
    this.scrollToBottom();
    this.workspaceService.updateWorkspace(this.workspace.id, this.workspace);
  }

  // 滚动方法
  scrollToBottom() {
    setTimeout(() => {
      this.chatBottom.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    });
  }
  // Inside your component class

  // Emoji picker
  handleEmojiSelection(emoji: string) {
    // Handle the selected emoji
  }

  // Image upload
  openImageUploader() {
    // Open the image uploader dialog
  }

  // Document attachment
  openDocumentUploader() {
    // Open the document uploader dialog
  }

  // Inside your component class

  // Image upload
  handleImageUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      // Handle the uploaded image file
    }
  }

  // Document attachment
  handleDocumentUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      // Handle the uploaded document file
    }
  }

  // Meeting scheduling
  openMeetingScheduler() {
    // Open the meeting scheduler dialog
  }

  scheduleMeeting() {
    // Handle the meeting scheduling logic
  }
}
