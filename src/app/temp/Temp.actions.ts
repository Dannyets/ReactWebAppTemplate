import { GET_TEMPLATES, ADD_ITEM, REMOVE_ITEM } from './Temp.actionTypes';
import { ITemplate } from './Template';

export const getTemplatesSuccess = (templates: ITemplate[]) => ({
    type: GET_TEMPLATES,
    payload: { 
        templates 
    }
});

export const addItem = (template: ITemplate) => ({
    type: ADD_ITEM,
    payload: {
        template
    }
});

export const removeItem = (id: string) => ({
    type: REMOVE_ITEM,
    payload: {
        id
    }
});