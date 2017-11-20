{
  entities: {
    channels: {
      1: {
        id: 1,
        name: 'yadda',
        description: 'yaddayadda',
        img_url: 'yaddayadda',
        user_ids: [6, 7, 8],
        message_ids: [4, 5]
      },
      2: {
        id: 2,
        name: 'yadda',
      },
      3: {
        id: 3,
        name: 'yadda',
      }
    },
    users: {
      6: {
        id: 6,
        username: 'yaddayadda',
        img_url: 'yaddayadda'
      }
      7: {
        id: 7,
        username: 'yaddayadda',
        img_url: 'yaddayadda'
      },
      8: {
        id: 8,
        username: 'yaddayadda',
        img_url: 'yaddayadda'
      }
    },

    messages: {
      4: {
        id: 4,
        body: 'yadda',
        user_id: 1,
        channel_id: 1,
        time: timestamp,
        child_message_ids: [6, 7],
      },
      5: {
        id: 5
        body: 'yadda',
        user_id: 1,
        channel_id: 1,
        time: timestamp,
        child_message_ids: []
      }
    }
  },

  ui: {
    dropdown: null, // or the dropdown itself
    loading: true,
    modal: true,
    currentChannel: 1,
  }

  errors: {
    session: ['Invalid credentials'],
    messageForm: ["Message can't be blank"],
    channel: ["Name can't be blank"],
  }

  session: {
    currentUser: {
      id: 1,
      username: 'yadda',
      img_url: 'yaddayadda'
    },
    email: "example@email.com",
  }
}
