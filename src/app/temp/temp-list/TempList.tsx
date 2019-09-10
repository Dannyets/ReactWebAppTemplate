import React from 'react'
import { useSelector } from 'react-redux'
import { TempListContainer } from './TempList.styles';
import { getTemplates } from '../Temp.selectors';
import { List } from '../../../common';
import { useTemplatesFetcher } from '../Temp.resource';
import { TempListItem } from '../temp-list-item';

export const TempList: React.FC = ({ }) => {
    const templates = useSelector(getTemplates);
    useTemplatesFetcher();

    return (
        <TempListContainer>
            <List items={templates}>
                {({ item }) => <TempListItem item={item}/>}
            </List>
        </TempListContainer>
    );
}