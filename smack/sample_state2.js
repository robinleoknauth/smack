{
  payload: {
    channels: {
      1: {
        id: 1,
        name: 'loretipsum',
        description: 'blabla',
        img_url: 'blabla',
        user_ids: [2, 6, 8],
        message_ids: [4, 5]
      },
      2: {
        id: 2,
        name: 'loretipsum',
      },
      3: {
        id: 3,
        name: 'loretipsum',
      }
    },
    users: {
      6: {
        id: 6,
        username: 'abc',
        img_url: 'blabla'
      }
      7: {
        id: 7,
        username: 'def',
        img_url: 'blabla'
      },
      8: {
        id: 8,
        username: 'ghi',
        img_url: 'blabla'
      }
    },

    messages: {
      4: {
        id: 4,
        body: 'loretipsum',
        user_id: 1,
        channel_id: 1,
        time: timestamp,
      },
      5: {
        id: 5
        body: 'loretipsum',
        user_id: 1,
        channel_id: 1,
        time: timestamp,
      }
    }
  },

  ui: {
    dropdown: null,
    loading: true,
    modal: true,
    currentChannel: 1,
  }

  session: {
    currentUser: {
      id: 1,
      username: 'loretipsum',
      img_url: 'blabla'
    },
    email: "lipsum@gmail.com",
  }
}
