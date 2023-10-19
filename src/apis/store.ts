import http from "../services/httpService";

export const loginWithUser = async (payload: any) => {

  const result = await http.post(`/auth/login`,payload);

  return result.data;
};
export const getInfor = async (payload: any) => {
  const result = await http.get(`/auth/me`, {
  });
  return result.data;
};
export const getCategory = async () => {
  const result = await http.get(`/catalog/categories`, {
  });
  return result.data;
};
export const getProduct = async (payload: any) => {
  const result = await http.get(`/catalog/products`, {
    params: {
      skip:payload?.page,
      limit:10
    },
  });
  return result.data;
};
export const getProductByCategoryName = async (payload: any) => {
  const result = await http.get(`/catalog/category/${payload}/products`, {
    params: {
      skip:1,
      limit:10
    },
  });
  return result.data;
};
