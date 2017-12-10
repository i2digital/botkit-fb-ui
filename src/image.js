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
