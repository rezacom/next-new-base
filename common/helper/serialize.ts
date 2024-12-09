/* eslint-disable @typescript-eslint/no-explicit-any */
export const serialize = (data: any) => {
  const queryString: string[] = [];
  if (process.env.NEXT_PUBLIC_CODE === "0") {
    Object.entries(data).forEach(([key, value]) => {
      if (key === "id") queryString.push(`${key}=${value}`);
      else queryString.push(`&${key}=${value}`);
    });
  } else {
    Object.entries(data).forEach(([key, value]) => {
      queryString.push(`${key}=${value}`);
    });
  }

  console.log(queryString);

  return process.env.NEXT_PUBLIC_CODE === "1"
    ? "?" +
        btoa(
          encodeURIComponent(queryString.join(String.fromCharCode(13))).replace(
            /%([0-9A-F]{2})/g,
            function (match, p1) {
              return String.fromCharCode(parseInt(p1, 16));
            }
          )
        )
    : "?" + queryString.join("");

  //	 return config.response_type === 1
  //   ? "?" +
  //       btoa(
  //         encodeURIComponent(queryString.join(String.fromCharCode(13))).replace(
  //           /%([0-9A-F]{2})/g,
  //           function (match, p1) {
  //             return String.fromCharCode(parseInt(p1, 16));
  //           }
  //         )
  //       )
  //   : "?" +
  //       queryString
  //         .join(String.fromCharCode(13))
  //         .replace(/%([0-9A-F]{2})/g, function (match, p1) {
  //           return String.fromCharCode(parseInt(p1, 16));
  //         });
};
