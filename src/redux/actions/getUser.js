import { GetUser } from "../../services/auth/Get_User";
import { setIsUserIn } from "../reducers/auth/getUser";

export const userGet = () => async (dispatch) => {
  GetUser()
    .then((result) => {
      dispatch(setIsUserIn(result.data.data));
    })
    .catch((err) => {});
};