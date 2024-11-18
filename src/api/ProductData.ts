import axios from 'axios';

export const ProductData = async (limit: number) => {
  try {
    const {data} = await axios.get(
      `https://dummyjson.com/products?limit=${limit}`,
    );
    return data;
  } catch (error) {
    console.log(`Error on ProductData: ${error}`);
  }
};

export const DailyDealData = async ({}: {limit?: number}) => {
  try {
    const {data} = await axios.get(
      'https://dummyjson.com/products/category/mens-shirts',
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(`Error on DailyDealData: ${error}`);
  }
};

type requestProps = {
  limit?: number;
  page?: number;
};
export const allProductsData = async ({limit = 10, page = 1}: requestProps) => {
  try {
    const {data} = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
    );
    return data;
  } catch (error) {
    console.log(`Error on allProductsData: ${error}`);
  }
};
