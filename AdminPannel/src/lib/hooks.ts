import { useDispatch, useSelector, useStore } from 'react-redux'
//@ts-ignore
import type { AppDispatch, AppStore, RootState } from '@/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
//@ts-ignore
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//@ts-ignore
export const useAppSelector = useSelector.withTypes<RootState>()
//@ts-ignore
export const useAppStore = useStore.withTypes<AppStore>()