module.exports = (params) => {

  const Widget = {
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: {
            element: params
          }
        }
      }
    },
    getMessage: function () {
      return Widget.message;
    }
  };
  return Widget;

};