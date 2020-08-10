import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('channel connected...')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message-container').append(data.mod_message)
    scroll_bottom()
  }
});
