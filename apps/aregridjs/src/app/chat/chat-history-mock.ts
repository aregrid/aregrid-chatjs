export interface ChatMessage {
  userAvatar: string;
  userName: string;
  type?: string;
  content: string;
}
const ChatHistoryMock = {
  getMessages: () => {
    const messages: ChatMessage[] = [
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        type: 'affine',
        content: '',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content:
          "I have some ideas for the new iteration of aregridjs. Let's discuss!",
        type: 'text',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content:
          "Sure, I'm excited to hear your ideas. Let's make aregridjs even better!",
        type: 'text',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I think we should prioritize improving the documentation.',
        type: 'text',
      },

      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content:
          'We can gather feedback from the community for feature requests.',
        type: 'text',
      },

      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I will prepare a roadmap for the next iteration.',
        type: 'text',
      },
    ];

    return messages;
  },
};

export { ChatHistoryMock };
