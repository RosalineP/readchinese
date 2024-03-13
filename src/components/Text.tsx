import React, { Dispatch, FC, memo, SetStateAction, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import classNames from 'classnames';

interface HeaderProps {
    name: string;
    link: string;
    showHelp: boolean;
    setShowHelp: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = memo(({ name, link, showHelp, setShowHelp }) => {
    return (
        <div className="titleHeader">
            <div className="titleHeader__title">{name}</div>

            <div className="titleHeader__icons">
                <div
                    className={classNames('titleHeader__icons__lang clickable', {
                        'titleHeader__icons__lang--on': !showHelp,
                        'titleHeader__icons__lang--off': showHelp,
                    })}
                    onClick={() => setShowHelp(!showHelp)}
                >
                    <FontAwesomeIcon icon={solid('language')} size="2x" />
                </div>

                <div className="titleHeader__icon__cards clickable">
                    <a href={link}>
                        <FontAwesomeIcon icon={solid('clone')} size="2x" className="titleHeader__icon__cards__link" />
                    </a>
                </div>
            </div>
        </div>
    );
});

interface CharacterProps {
    char: string;
}

const Character: FC<CharacterProps> = memo(({ char }) => {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div
            className={classNames('triad__flex clickable', {
                'triad__characters--on': clicked,
                'triad__characters--off': !clicked,
            })}
            onClick={() => setClicked(!clicked)}
        >
            {char}
        </div>
    );
});

interface Props {
    text: { name: string; quizlet: string; lines: string[][] };
}

export const Text: FC<Props> = memo(({ text }) => {
    const [showHelp, setShowHelp] = useState<boolean>(false);
    const { name, quizlet, lines } = text;
    const LIMIT = 32;

    return (
        <div className="text">
            <Header name={name} link={quizlet} setShowHelp={setShowHelp} showHelp={showHelp} />

            <div className="text__body">
                {lines.map((triad, i) => {
                    // Create arrays of length LIMIT for evenly columned tables
                    const characters = triad[0].split('');
                    const charactersAddition = [...Array(LIMIT - characters.length)];
                    const pinyin = triad[1].split(' ');
                    const pinyinAddition = [...Array(LIMIT - pinyin.length)];

                    if (characters.length === 0) {
                        return <div className="vertical_spacer"></div>
                    }

                    return (
                        <div key={i} className="text__body__triad">
                            <div className="triad__characters">
                                {characters.concat(charactersAddition).map((char, i) => (
                                    <Character char={char} key={i} />
                                ))}
                            </div>
                            <div className={classNames('triad__pinyin', { invisible: !showHelp })}>
                                {pinyin.concat(pinyinAddition).map((char, i) => (
                                    <div className="triad__flex" key={i}>
                                        {char}
                                    </div>
                                ))}
                            </div>
                            <div className={classNames('triad__english', { invisible: !showHelp })}>{triad[2]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
