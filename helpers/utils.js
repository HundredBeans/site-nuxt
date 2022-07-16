export const parseUrl = (text) => {
  const urlRegex =
    // eslint-disable-next-line no-useless-escape
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  const isUrl = text.match(urlRegex);
  if (isUrl) {
    return {
      url: isUrl[0],
      isValid: true,
    };
  } else {
    return {
      url: null,
      isValid: false,
    };
  }
};
