import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConfigContext } from '../../root'
import { } from './Temp.styles';
import { getTemplates } from './Temp.selectors';
import { getTemplatesSuccess } from './Temp.actions';
import { List } from '../../common';
import { ITemplate } from './Template.model';
import { tempDefaultState } from './Temp.store';
import { useTemplatesFetcher } from './Temp.resource';

export const Temp: React.FC = ({ }) => {
    const templates = useSelector(getTemplates);
    useTemplatesFetcher()

    return (
        <div className="App">
            <div className="App-header">
                <List items={templates}>
                {({ item }) => {
                    const template = item as ITemplate;

                    return (
                    <div>
                        <div>{template.id}</div>
                        <div>{template.name}</div>
                    </div>
                )}}
                </List>
            </div>
        </div>
    );
}