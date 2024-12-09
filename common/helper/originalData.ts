export const originalData = (data: any, flag = true) => {
  if (process.env.NEXT_PUBLIC_CODE === '1') {
    // console.log(JSON.parse(atob(data)));
    if (flag) return JSON.parse(atob(data)).Data[0];
    else return JSON.parse(atob(data)).Data;
  } else {
    if (flag) return data.Data[0];
    else return data.Data;
  }
};
