/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */

// export const getEnvVar = (key: string) => {
//   if (process.env[key] === undefined) {
//     throw new Error(`Env variable ${key} is required`)
//   }
//   return process.env[key] || ''
// }

// export const METRIKA_ID = Number(getEnvVar('REACT_APP_METRIKA_ID'))

export const config = {
  API_ENDPOINT: import.meta.env.VITE_SUPABASE_URL,
  API_KEY: import.meta.env.VITE_SUPABASE_KEY,
  PREFIX: 'ATT'
} as const
