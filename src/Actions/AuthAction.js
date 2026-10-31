
import { apiCall } from "./api";
import { loginSuccess } from "../Reducers/AuthReducer";

export const loginUser = (credentials, onSuccess, onFailure) => {
    return (dispatch) => {
        apiCall(
            "/user/login",
            "POST",
            credentials,
            {},
            (data) => {
                dispatch(loginSuccess({
                    token: data.token,
                    user: data.user
                }));

                onSuccess?.(data);
            },
            (error) => {
                onFailure?.(error);
            }
        );
    };
};
