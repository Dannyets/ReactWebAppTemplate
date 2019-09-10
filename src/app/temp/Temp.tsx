import React from 'react'
import { TempList } from './temp-list';
import { TempContainer } from './Temp.styles';

export const Temp: React.FC = ({ }) => {
    return (
        <div className="App">
            <div className="App-header">
                <TempContainer>
                    <TempList/>
                </TempContainer>
            </div>
        </div>
    );
}