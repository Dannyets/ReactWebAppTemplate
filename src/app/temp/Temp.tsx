import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConfigContext } from '../../root'
import axios from 'axios';
import { } from './Temp.styles';
import { getTemplates } from './Temp.selectors';
import { getTemplatesSuccess } from './Temp.actions';
import { List } from '../../common';
import { ITemplate } from './Template';
import { tempDefaultState } from './Temp.store';


export const Temp: React.FC = ({ }) => {
    const templates = useSelector(getTemplates);
    const dispatch = useDispatch();

    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const templatesApiUrl = `${baseUrl}/api/temp`;

    useEffect(() => {
        const getTemplates = async () => {
            let templates;

            try {
                const response = await axios.get(templatesApiUrl);
                const { data } = response;
                templates = data;
            } catch (error) {
                templates = tempDefaultState.templates;
            }

            dispatch(getTemplatesSuccess(templates));
        }

        getTemplates();

        return () => {

        };
    }, []);

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