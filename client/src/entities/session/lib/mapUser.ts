import { type SessionUserId, type User, type SessionDto } from 'src/entities/session/api/types'

export function mapUser(dto: SessionDto): User {
  return {
    email: dto.user.email,
    userId: dto.user.id as SessionUserId
  }
}
