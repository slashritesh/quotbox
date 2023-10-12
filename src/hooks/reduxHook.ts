import { useSelector, useDispatch } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux"
import type {Rootstate,AppDispatch} from '../Redux/store'


export const useAppDispatch : ()=> AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<Rootstate> = useSelector