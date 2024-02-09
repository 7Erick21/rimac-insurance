import { IUserResponse } from '@/core/domain/models/user'
import { UserApiRespoitory } from '@/core/domain/repositories/UserApiRespoitory'

import { PublicApi } from '../api/Api'

export class UserApi extends PublicApi implements UserApiRespoitory {
    public ListUserDetail = async () => {
        const data = await this.get<IUserResponse>(`/api/user.json`)
        return data.data
    }
}
