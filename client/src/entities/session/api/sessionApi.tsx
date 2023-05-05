import { mapSession } from 'src/entities/session/lib/mapSession'
import { baseApi } from 'src/shared/api'
import { config } from 'src/shared/config'
import { type Session, type RequestLoginBody, type SessionDto, User } from 'src/entities/session/api/types'
import { mapUser } from 'src/entities/session/lib/mapUser'

const keyLS = `${config.PREFIX}:refresh_token`

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    refresh: build.query<Session, void>({
      query: () => ({
        url: `/auth/v1/token?grant_type=refresh_token`,
        method: 'GET',
        body: {
          refresh_token: window.localStorage.getItem(keyLS)
        },
        headers: {
          apikey: config.API_KEY
        }
      }),
      transformResponse: (response: SessionDto) => mapSession(response)
    }),
    signup: build.mutation({
      query: (body: RequestLoginBody) => ({
        url: `/auth/v1/signup`,
        method: 'POST',
        body,
        headers: {
          apikey: config.API_KEY
        }
      })
    }),
    login: build.mutation<User, RequestLoginBody>({
      query: (body) => ({
        url: `/auth/v1/token?grant_type=password`,
        method: 'POST',
        body,
        headers: {
          apikey: config.API_KEY
        }
      }),
      transformResponse: (response: SessionDto) => mapUser(response)
    })
  })
})

export const { useRefreshQuery, useSignupMutation, useLoginMutation } = sessionApi
