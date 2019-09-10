import React from 'react';
import { Provider } from 'react-redux';

import { routes } from './routes';

import './Root.css';
import { Header } from './Root.styles';

import {
  ThemeProvider,
  NavigationWithRouter,
  Router,
  configureStore,
  IRoute
} from '../common';

const store = configureStore({
  temp: {
    templates: []
  }
});

const navigationLinks = convertRoutesToNavigationLinks(routes);

interface IConfiguration {
  baseUrl: string;
};

export const configuration: IConfiguration = {
  baseUrl: 'http://localhost:3001'
};

export const ConfigContext = React.createContext(configuration);

export const Root: React.FC = () => {
  return (
    <ConfigContext.Provider value={configuration}>
      <Provider store={store}>
          <ThemeProvider>
              <Router routes={routes}>
                <Header>
                  <NavigationWithRouter links={navigationLinks} />
                </Header>
              </Router>
          </ThemeProvider>
        </Provider>
    </ConfigContext.Provider>
  );
}

function convertRoutesToNavigationLinks(routes: IRoute[]) {
  return routes.filter(r => r.navigation && r.navigation.show)
    .map(r => {
      const { url, navigation } = r;
      const { displayName } = navigation;

      return {
        label: displayName,
        href: url
      };
    });
}