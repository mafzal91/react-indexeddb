import { get } from "./fetch";

const GetMenus = (data) => {
  const params: any = data;
  return get("/menus", { params });
};

export default GetMenus