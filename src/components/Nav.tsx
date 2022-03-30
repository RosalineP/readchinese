import React, { Dispatch, FC, memo, SetStateAction } from 'react';
import classNames from 'classnames';

interface Props {
    textNames: string[];
    chosenText: string;
    setChosenText: Dispatch<SetStateAction<string>>;
}

export const Nav: FC<Props> = memo(props => {
    const { textNames, chosenText, setChosenText } = props;

    return (
        <div className="nav">
            <div className="nav__header"> 读 </div>

            {textNames.map((textName, i) => {
                return (
                    <div
                        className={classNames('nav__title', { 'nav__title--selected': textName === chosenText })}
                        key={i}
                        onClick={() => setChosenText(textName)}
                    >
                        {textName}
                    </div>
                );
            })}
        </div>
    );
});
