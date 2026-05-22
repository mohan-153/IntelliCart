import API from "./axios";



/*
|--------------------------------------------------------------------------
| DASHBOARD ANALYTICS
|--------------------------------------------------------------------------
*/

export const getDashboardAnalytics =
  async () => {
    const { data } =
      await API.get(
        "/analytics/dashboard"
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| MONTHLY SALES
|--------------------------------------------------------------------------
*/

export const getMonthlySales =
  async () => {
    const { data } =
      await API.get(
        "/analytics/monthly-sales"
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| TOP PRODUCTS
|--------------------------------------------------------------------------
*/

export const getTopProducts =
  async () => {
    const { data } =
      await API.get(
        "/analytics/top-products"
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| USER GROWTH
|--------------------------------------------------------------------------
*/

export const getUserGrowth =
  async () => {
    const { data } =
      await API.get(
        "/analytics/user-growth"
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| RECENT ORDERS
|--------------------------------------------------------------------------
*/

export const getRecentOrders =
  async () => {
    const { data } =
      await API.get(
        "/analytics/recent-orders"
      );

    return data;
  };