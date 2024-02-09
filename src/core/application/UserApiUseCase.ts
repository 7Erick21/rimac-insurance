import { UserApiRespoitory } from '@/core/domain/repositories/UserApiRespoitory'

export class UserApiUseCase {
    private repo: UserApiRespoitory

    constructor(repo: UserApiRespoitory) {
        this.repo = repo
    }

    public async ListUserDetail() {
        return this.repo.ListUserDetail()
    }
}
