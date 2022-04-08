import React from 'react';
import Moment from 'react-moment';

export default function Date({ startDates }) {
    return (
        <Moment format="YYYY/MM/DD">
            {startDates}
        </Moment>
    )
}
