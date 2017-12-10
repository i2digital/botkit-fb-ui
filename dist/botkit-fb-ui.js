exports.button = (params) => {
  const Widget = {

    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: params.text,
          buttons: [],
        },
      },
    },

    getMessage: () => Widget.message,

    addButton: (qrParams) => {
      let newButton;
      if (qrParams.type === 'web_url') {
        newButton = {
          type: qrParams.type,
          url: qrParams.url,
          title: qrParams.title,
          webview_height_ratio: qrParams.height,
          messenger_extensions: qrParams.msgExtEnabled,
          fallback_url: qrParams.fallbackUrl,
        };
      }
      else if (qrParams.type === 'postback') {
        newButton = {
          type: qrParams.type,
          title: qrParams.title,
          payload: qrParams.payload,
        };
      }
      Widget.message.attachment.payload.buttons.push(newButton);
    },
  };

  return Widget;
};

exports.genericTemplate = () => {
  const Widget = {

    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [],
        },
      },
    },

    getMessage: () => Widget.message,

    addElement: (params) => {
      const newElement = {
        title: params.title,
        image_url: params.imageUrl,
        subtitle: params.subtitle,
        buttons: [],
      };
      Widget.message.attachment.payload.elements.push(newElement);
    },

    addButton: (params) => {
      let newButton;
      if (params.type === 'web_url') {
        newButton = {
          type: params.type,
          url: params.url,
          title: params.title,
        };
      }
      else if (params.type === 'postback') {
        newButton = {
          type: params.type,
          title: params.title,
          payload: params.payload,
        };
      }
      Widget.message.attachment.payload.elements[params.elementIndex].buttons.push(newButton);
    },

  };

  return Widget;
};

exports.image = (params) => {
  const Widget = {

    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: {
            element: params,
          },
        },
      },
    },

    getMessage: () => Widget.message,

  };

  return Widget;
};

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
