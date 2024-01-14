export const convertToBase64 = async (url: string, cb: Function) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = () => {
    cb(reader.result);
  };
}