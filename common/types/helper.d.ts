export type errorProps = {
  error: {
    message: string;
    stack: string;
  };
  reset: VoidFunction;
};

export type cookieKeys = "userInfo" | "rememberMe" | "theme";
