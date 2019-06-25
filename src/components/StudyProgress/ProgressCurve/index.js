import React from 'react';
import Trend from 'react-trend';

const ProgressCurve = () => {
    return (
        <div className="progress__curve">
            <h2 className="progress__heading h2">Кривая обучаемости</h2>
            <Trend
                smooth
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-out"
                data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 100, 0]}
                gradient={['#d64a4a', '#595dea', '#6fdb95']}
                radius={100}
                strokeWidth={1.3}
                strokeLinecap={'butt'}
            />
        </div>
    );
}

export default ProgressCurve;