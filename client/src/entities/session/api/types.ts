export interface SessionDto {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  user: UserDto
}

export interface UserDto {
  id: string
  aud: string
  role: string
  email: string
  email_confirmed_at: string
  phone: string
  confirmation_sent_at: string
  confirmed_at: string
  last_sign_in_at: string
  app_metadata: AppMetadata
  user_metadata: UserMetadata
  identities?: IdentitiesEntity[] | null
  created_at: string
  updated_at: string
}
export interface AppMetadata {
  provider: string
  providers?: string[] | null
}
export type UserMetadata = Record<string, unknown>
export interface IdentitiesEntity {
  id: string
  user_id: string
  identity_data: IdentityData
  provider: string
  last_sign_in_at: string
  created_at: string
  updated_at: string
}
export interface IdentityData {
  email: string
  sub: string
}

export type SessionUserId = Brand<Id, 'SessionUserId'>

export type Session = {
  accessToken: string
  userId: SessionUserId
}

export type User = {
  email: string
  userId: SessionUserId
}

export type RequestLoginBody = {
  email: string
  password: string
}
