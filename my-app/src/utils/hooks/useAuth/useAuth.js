import React from 'react';
import {superjobApi} from "@services";
import {useLocalStorage} from "@hooks";

export const useAuth = () => {
  const [accessToken, setAccessToken] = useLocalStorage("access_token")

  const isAuthorized = !!accessToken

  const authorize = async () => {
    const {access_token} = await superjobApi.authorizeByPassword();
    setAccessToken(access_token)
  }

  return {isAuthorized, authorize}
};
