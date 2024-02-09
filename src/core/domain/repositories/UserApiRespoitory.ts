import { IUserResponse } from '../models/user'

export interface UserApiRespoitory {
    ListUserDetail: () => Promise<IUserResponse>
}
