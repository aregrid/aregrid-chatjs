const ChatHistoryMock = {
  getMessages: () => {
    const messages = [
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content:
          "I have some ideas for the new iteration of aregridjs. Let's discuss!",
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content:
          "Sure, I'm excited to hear your ideas. Let's make aregridjs even better!",
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I think we should prioritize improving the documentation.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content: 'What about adding support for virtual scrolling?',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I have some suggestions for improving the API design.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content: 'We can also optimize performance for large datasets.',
      },

      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I will prepare a roadmap for the next iteration.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content:
          'We can gather feedback from the community for feature requests.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Jack',
        content: 'I will create a demo video showcasing the new features.',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'Let me create a design mockup for the new UI components.',
      },
    ];

    while (messages.length < 20) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomIndex];
      messages.push(randomMessage);
    }
    return messages;
  },
};

export { ChatHistoryMock };
