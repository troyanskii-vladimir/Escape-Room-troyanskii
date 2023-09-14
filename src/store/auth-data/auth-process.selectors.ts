import { AuthorizationStatus } from "../../config";
import { State } from "../../types/state";
import { UserData } from "../../types/user-data";


export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.Auth.authorizationStatus;
export const getUserData = (state: State): UserData => state.Auth.userData;
