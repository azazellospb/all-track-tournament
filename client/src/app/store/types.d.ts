import { rootReducer } from 'src/app/store/rootReducer'
import store from './index'

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

type TypedCreateAsyncThunk<ThunkApiConfig> = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
  options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
) => AsyncThunk<Returned, ThunkArg, ThunkApiConfig>

export const createAppAsyncThunk: TypedCreateAsyncThunk<{
  state: RootState
}> = createAsyncThunk
