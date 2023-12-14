const shorten = (title) => {
  const splitedTitle = title.split(" ");
  if (splitedTitle.length >= 2) {
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
  } else {
    return title;
  }
};

export { shorten };
