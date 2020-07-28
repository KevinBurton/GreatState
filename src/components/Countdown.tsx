import React from 'react';
import moment from 'moment';

import SVGCircle from './SVGCircle';

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

export type DateDifference = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}

export function dateDelta(a: Date, b: Date = new Date()) : DateDifference {
    var d = Math.abs(a.getTime() - b.getTime()) / 1000; // delta
    const s: DateDifference = {                         // structure
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    let r = {...s};
    
    Object.keys(s).forEach(function(key){
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
    });
    return r;
}

export type CountdownState = {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
  
export type CountdownProps = {
    timeTillDate: string;
    timeFormat: string;
}

class Countdown extends React.Component<CountdownProps,CountdownState> {
    state = {
        months: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };
    interval = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const future: moment.Moment = moment(timeTillDate, timeFormat);
            const dateDifference = dateDelta(future.toDate());
            const months = dateDifference.month;
            const days = dateDifference.day; 
            const hours = dateDifference.hour;
            const minutes = dateDifference.minute;
            const seconds = dateDifference.second;

            this.setState({ months, days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { months, days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const monthsRadius = mapNumber(months, 12, 0, 0, 360);
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <h1>Countdown</h1>
                <div className="countdown-wrapper">
                    {months && (
                        <div className="countdown-item">
                            <SVGCircle radius={monthsRadius} />
                            {months}
                            <span>months</span>
                        </div>
                    )}
                    {days && (
                        <div className="countdown-item">
                            <SVGCircle radius={daysRadius} />
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            <SVGCircle radius={hoursRadius} />
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Countdown;