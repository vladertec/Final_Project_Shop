import axios from "../ulits/instance/instance";

export default async function getCategoryProductsToRender(filterCategory) {
  const { data } = await axios.get(`${filterCategory}`);

  return data;
}
