import React from "react";
import { render, screen } from "@testing-library/react";
import moment from 'moment';
import Countdown from '../components/Countdown';
describe('Countdown', () => {
    test("renders Countdown without crashing", async () => {
        const tillDateString = "08 01 2020, 6:00 am";
        const tillDateFormat = "MM DD YYYY, h:mm a";
        const then = moment(tillDateString, tillDateFormat);
        const now = moment();
        const countdown = moment(then - now);
        const days = Number(countdown.format('D'));
        const hours = Number(countdown.format('HH'));
        const minutes = Number(countdown.format('mm'));
        const seconds = Number(countdown.format('ss'));
        const { getByText } = render(<Countdown timeTillDate={tillDateString} timeFormat={tillDateFormat} />);

        await screen.findByText(/Countdown/);

        expect(getByText('seconds')).toBeInTheDocument();
        let element = Number(Array.from((await screen.findByText('seconds')).parentElement.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(''));
        expect(element).toBeGreaterThanOrEqual(seconds - 2);

        expect(getByText('minutes')).toBeInTheDocument();
        element = Number(Array.from((await screen.findByText('minutes')).parentElement.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(''));
        expect(element).toBeGreaterThanOrEqual(minutes - 1);

        expect(getByText('hours')).toBeInTheDocument();
        element = Number(Array.from((await screen.findByText('hours')).parentElement.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(''));
        expect(element).toBeGreaterThanOrEqual(hours - 1);

        expect(getByText('days')).toBeInTheDocument();
        element = Number(Array.from((await screen.findByText('days')).parentElement.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(''));
        expect(element).toBeGreaterThanOrEqual(days - 1);
    });
});