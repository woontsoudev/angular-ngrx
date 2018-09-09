export const getMockArray = (model, count) => {
  const mocks = [];
  for (let i = 0; i < count; ++i) {
    mocks.push(
      Object.assign({}, model, {
        id: i
      })
    );
  }

  return mocks;
};
