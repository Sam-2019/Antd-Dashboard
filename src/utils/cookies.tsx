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

export const clearCookie = () => {
  Cookies.remove("refreshToken");
};
