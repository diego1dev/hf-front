export const decodeJWT = (token: string) => {
  if (!token) return {};
  const base64UrlDecode = (str: string) => decodeURIComponent(
    atob(str)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );
  const decodedPayload = JSON.parse(base64UrlDecode(token.split('.')[1]));
  return decodedPayload;
};
export default decodeJWT;
