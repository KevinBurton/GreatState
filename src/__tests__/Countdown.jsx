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
        const now = moment();
        const countdown = moment.duration(future.diff(now));
        const days = countdown.days();
        const hours = countdown.hours();
        const minutes = countdown.minutes();
        const seconds = countdown.seconds();

        const { getByText } = render(<Countdown timeTillDate={tillDateString} timeFormat={tillDateFormat} />);

        await screen.findByText(/Countdown/);

        expect(getByText('seconds')).toBeInTheDocument();
        let element = Number((await screen.findByText('seconds')).closest('div').textContent.match(/\d+/)[0]);
        if(seconds > 2) {
            expect(element).toBeGreaterThanOrEqual(seconds - 2);
        } else {
            const pass = element >= 60-seconds || element <= seconds;
            expect(pass).toBe(true);
        }

        expect(getByText('minutes')).toBeInTheDocument();
        element = Number((await screen.findByText('minutes')).closest('div').textContent.match(/\d+/)[0]);
        if(minutes > 1) {
            expect(element).toBeGreaterThanOrEqual(minutes - 1);
        } else {
            const pass = element >= 60-minutes || element <= minutes;
            expect(pass).toBe(true);
        }

        expect(getByText('hours')).toBeInTheDocument();
        element = Number((await screen.findByText('hours')).closest('div').textContent.match(/\d+/)[0]);
        if(hours > 1) {
            expect(element).toBeGreaterThanOrEqual(hours - 1);
        } else {
            const pass = element >= 24-hours || element <= hours;
            expect(pass).toBe(true);
        }

        expect(getByText('days')).toBeInTheDocument();
        element = Number((await screen.findByText('days')).closest('div').textContent.match(/\d+/)[0]);
        if(days > 1) {
            expect(element).toBeGreaterThanOrEqual(days - 1);
        } else {
            const pass = element >= 30-days || element <= days;
            expect(pass).toBe(true);
        }
    });
});