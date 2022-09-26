export const extractId = (url) => {
  const chunks = url.split('/');

  return chunks[chunks.length - 1];
};
