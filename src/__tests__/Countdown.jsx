import React from "react";
import { render, screen } from "@testing-library/react";
import moment from 'moment';
import Countdown from '../components/Countdown';
describe('Countdown', () => {
    test("renders Countdown without crashing", async () => {
        const tillDateString = "08 01 2020, 6:00 am";
        const tillDateFormat = "MM DD YYYY, h:mm a";
        const future = moment(tillDateString, tillDateFormat);
        //https://stackoverflow.com/questions/46408210/moment-date-difference-is-not-working
        const expectedDuration  = moment.duration(future.diff(moment()));

        const { getByText } = render(<Countdown timeTillDate={tillDateString} timeFormat={tillDateFormat} />);

        await screen.findByText(/Countdown/);

        expect(getByText('seconds')).toBeInTheDocument();
        expect(getByText('minutes')).toBeInTheDocument();
        expect(getByText('hours')).toBeInTheDocument();
        expect(getByText('days')).toBeInTheDocument();
        const actualSeconds = Number((await screen.findByText('seconds')).closest('div').textContent.match(/\d+/)[0]);
        const actualMinutes = Number((await screen.findByText('minutes')).closest('div').textContent.match(/\d+/)[0]);
        const actualHours  = Number((await screen.findByText('hours')).closest('div').textContent.match(/\d+/)[0]);
        const actualDays  = Number((await screen.findByText('hours')).closest('div').textContent.match(/\d+/)[0]);
        const actualMonths  = Number((await screen.findByText('months')).closest('div').textContent.match(/\d+/)[0]);
        const actualDuration = moment.duration({
            seconds: actualSeconds,
            minutes: actualMinutes,
            hours: actualHours,
            days: actualDays
        });
        const durationDifference = actualDuration.subtract(expectedDuration);
        expect(Math.abs(durationDifference.milliseconds() / 1000)).toBeLessThanOrEqual(2);
    });
});