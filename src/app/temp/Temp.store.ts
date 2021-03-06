import { ITemplateListItem } from "./temp-list-item/TemplateListItem.model";

export interface TempState {
    templates: ITemplateListItem[],
};

export const tempDefaultState: TempState = {
    templates: [
        {
            id: '1',
            name: 'temp1'
        },
        {
            id: '2',
            name: 'temp2'
        },
        {
            id: '3',
            name: 'temp3'
        },
        {
            id: '4',
            name: 'temp4'
        },
        {
            id: '5',
            name: 'temp5'
        }
    ]
};