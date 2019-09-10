import { TempState } from './Temp.store';

export const getTempState = (state: any) => state.temp as TempState;
export const getTemplates = (state: any) => getTempState(state).templates;