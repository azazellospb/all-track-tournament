import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/dist/query'
import { baseQuery } from 'src/shared/api/baseQuery'
import { invalidateAccessToken } from 'src/shared/api/invalidateTokenEvent'

const AUTH_ERROR_CODES = new Set([401])

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) {
  const result = await baseQuery(args, api, extraOptions)

  if (typeof result.error?.status === 'number' && AUTH_ERROR_CODES.has(result.error.status)) {
    api.dispatch(invalidateAccessToken())
  }
  return result
}
