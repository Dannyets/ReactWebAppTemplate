import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ConfigContext } from '../../root'
import { tempDefaultState } from './Temp.store';
import { useDispatch } from 'react-redux';
import { getTemplatesSuccess } from './Temp.actions';

export const getUrl = (baseUrl: string) => {
    const defaultUrl = 'http://localhost';
    const url = baseUrl || defaultUrl;
    const templatesApiUrl = `${url}/api/templates/`;
    return templatesApiUrl;
}

export const useTemplatesFetcher = () => {
    const dispatch = useDispatch();
    const context = useContext(ConfigContext);
    const { baseUrl } = context;
    const url = getUrl(baseUrl);

    useEffect(() => {
        const getTemplates = async () => {
            let templates;

            try {
                const response = await axios.get(url);
                const { data } = response;
                templates = data;
            } catch (error) {
                console.log(error);
            }

            dispatch(getTemplatesSuccess(templates || tempDefaultState.templates));
        }

        getTemplates();

        return () => {};
    }, []);
}