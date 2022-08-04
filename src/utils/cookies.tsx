import Cookies from "js-cookie";

export const setCookie = (data: any) => {
  // document.cookie = `accessToken=${data}; SameSite=None; Secure;`;
  Cookies.set("accessToken", `${data.accessToken}`, { path: "/" });
  Cookies.set("refreshToken", `${data.refreshToken}`, { path: "/" });
};

export const setAccessToken = (data: any) => {
  Cookies.set("accessToken", `${data.accessToken}`, { path: "/" });
};

export const setRefreshToken = (data: any) => {
  Cookies.set("refreshToken", `${data.refreshToken}`, {
    path: "/refresh_token",
  });
};

export const clearCookie = (data: any) => {
  console.log(data);
};

export const clearCookies = (data: any) => {
  console.log(data);
};

export const showCookie = (data: any) => {
  console.log(data);
  var value = document.cookie;
  console.log({ value: value });
};

export const showCookies = (data: any) => {
  console.log(data);
};
