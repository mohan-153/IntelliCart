import API from "./axios";



/*
|--------------------------------------------------------------------------
| REGISTER USER
|--------------------------------------------------------------------------
*/

export const registerUser = async (
  userData
) => {
  const { data } = await API.post(
    "/auth/register",
    userData
  );

  return data;
};



/*
|--------------------------------------------------------------------------
| LOGIN USER
|--------------------------------------------------------------------------
*/

export const loginUser = async (
  userData
) => {
  const { data } = await API.post(
    "/auth/login",
    userData
  );

  return data;
};



/*
|--------------------------------------------------------------------------
| GET PROFILE
|--------------------------------------------------------------------------
*/

export const getProfile = async () => {
  const { data } = await API.get(
    "/users/profile"
  );

  return data;
};