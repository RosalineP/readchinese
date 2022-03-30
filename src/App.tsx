import React, { FC, memo, useState } from 'react';

import './styles/Nav.css';
import './styles/Text.css';
import './styles/App.css';
import { Nav } from './components/Nav';
import { Text } from './components/Text';
import { twentiesThirties } from './texts';

const TEXT_MAP = { [twentiesThirties.name]: twentiesThirties };
const TEXTS = [twentiesThirties];

const App: FC = memo(() => {
    const [chosenText, setChosenText] = useState<string>(TEXTS[0].name);
    const textNames = TEXTS.map(text => text.name);

    return (
        <div className="app">
            <Nav textNames={textNames} chosenText={chosenText} setChosenText={setChosenText} />
            <Text text={TEXT_MAP[chosenText]} />
        </div>
    );
});

export default App;
