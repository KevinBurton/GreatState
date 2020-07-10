import { WeatherForecastsState, reducer } from '../store/WeatherForecasts';

describe("WeatherForecasts", () => {
    test("returns proper state", async () => {
        const currentState: WeatherForecastsState = {
            isLoading: false,
            startDateIndex: 0,
            forecasts: []
        }
        expect(reducer(currentState, {
            type: 'REQUEST_WEATHER_FORECASTS',
            startDateIndex: 0
        })).
            toEqual({
                startDateIndex: 0,
                forecasts: [],
                isLoading: true
            });
        expect(reducer(currentState, {
            type: 'RECEIVE_WEATHER_FORECASTS',
            startDateIndex: 0,
            forecasts: []
        })).
            toEqual({
                startDateIndex: 0,
                forecasts: [],
                isLoading: false
            });
        expect(reducer(undefined, {
            type: 'RECEIVE_WEATHER_FORECASTS',
            startDateIndex: 0,
            forecasts: []
        })).
            toEqual({
                forecasts: [],
                isLoading: false
            });
        expect(reducer(currentState, {
            type: 'XXX',
            startDateIndex: 0,
            forecasts: []
        })).
            toEqual({
                startDateIndex: 0,
                forecasts: [],
                isLoading: false
            });
    });
});
