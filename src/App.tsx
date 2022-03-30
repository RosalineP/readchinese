import React, { FC, memo } from 'react';

import './styles/Nav.css';
import './styles/Text.css';
import './styles/App.css';
import { Nav } from './components/Nav';
import { Text } from './components/Text';

const App: FC = memo(() => {
    return (
        <div className="app">
            <Nav />
            <Text />
        </div>
    );
});

export default App;
