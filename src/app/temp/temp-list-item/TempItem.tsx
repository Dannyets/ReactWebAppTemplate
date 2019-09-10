import React from 'react'
import { ITemplateListItem } from './TemplateListItem.model';

type TempListItemProps = {
    item: any
};

export const TempListItem: React.FC<TempListItemProps> = ({ item }) => {
    const { id, name } = item as ITemplateListItem;
    
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};