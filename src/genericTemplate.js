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
