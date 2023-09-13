import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { State, AppDispatch } from '../../types/state';


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
