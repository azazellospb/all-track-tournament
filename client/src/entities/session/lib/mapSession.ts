import { type SessionUserId, type Session, type SessionDto } from 'src/entities/session/api/types'

export function mapSession(dto: SessionDto): Session {
  return {
    accessToken: dto.access_token,
    userId: dto.user.id as SessionUserId
  }
}
