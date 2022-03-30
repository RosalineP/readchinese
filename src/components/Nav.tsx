import React, { FC, memo } from 'react';

export const Nav: FC = memo(() => {
    const TITLES = ['title1', 'title2', 'title3'];

    return (
        <div className="nav">
            <div className="nav__header"> 读 </div>

            <div className="nav__title"> {TITLES[0]} </div>
            <div className="nav__title nav__title--selected"> {TITLES[1]} </div>
            <div className="nav__title"> {TITLES[2]} </div>
        </div>
    );
});
