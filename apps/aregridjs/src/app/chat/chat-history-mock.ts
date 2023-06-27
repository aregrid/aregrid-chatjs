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
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content:
          "Sure, I'm excited to hear your ideas. Let's make aregridjs even better!",
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content:
          "I'm also interested in the new iteration. We should focus on code collaboration features.",
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I think we should prioritize improving the documentation.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'What about adding support for virtual scrolling?',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'We should consider integrating with popular UI frameworks.',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I have some suggestions for improving the API design.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'We can also optimize performance for large datasets.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'Let me create a task board to manage our progress.',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'We should conduct user testing for better usability.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'Let me create some sample demos for the documentation.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'We can enhance the code editor with syntax highlighting.',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'I will prepare a roadmap for the next iteration.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content:
          'We can gather feedback from the community for feature requests.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'Let me investigate potential performance optimizations.',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'We should consider integrating auChi Zhangated testing.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'I will create a demo video showcasing the new features.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'We should write comprehensive documentation for the APIs.',
      },
      {
        userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
        userName: 'Chi Zhang',
        content: 'Let me create a design mockup for the new UI components.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'We should optimize the bundle size for faster loading.',
      },
      {
        userAvatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'Let me investigate potential security enhancements.',
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
