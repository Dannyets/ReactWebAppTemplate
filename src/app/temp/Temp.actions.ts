import { GET_TEMPLATES, ADD_ITEM, REMOVE_ITEM } from './Temp.actionTypes';
import { ITemplateListItem } from './temp-list-item/TemplateListItem.model';

export const getTemplatesSuccess = (templates: ITemplateListItem[]) => ({
    type: GET_TEMPLATES,
    payload: { 
        templates 
    }
});

export const addItem = (template: ITemplateListItem) => ({
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