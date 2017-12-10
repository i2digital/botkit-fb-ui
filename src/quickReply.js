exports.quickReply = (params) => {
  const Widget = {

    message: {
      text: params.text,
      quick_replies: [],
    },

    getMessage: () => Widget.message,

    addQuickReply: (qrParams) => {
      const quickReply = {
        content_type: qrParams.contentType,
        title: qrParams.title,
        payload: qrParams.payload,
      };
      Widget.message.quick_replies.push(quickReply);
    },

    cleanReplies: () => {
      if (Widget.message.quick_replies.length !== 0) {
        Widget.message.quick_replies = [];
      }
    },

  };

  return Widget;
};
