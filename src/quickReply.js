exports.quickReply = function (params) {

  let Widget = {
    message: {
      text: params.text,
      quick_replies: []
    },
    getMessage: function () {
      return Widget.message;
    },
    addQuickReply: function (params) {
      let quick_reply = {
        content_type: params.contentType,
        title: params.title,
        payload: params.payload
      };
      Widget.message.quick_replies.push(quick_reply);
    },
    cleanReplies: ()=> {
      if (Widget.message.quick_replies.length != 0) {
        Widget.message.quick_replies = [];
      }
    }
  };
  return Widget;

};