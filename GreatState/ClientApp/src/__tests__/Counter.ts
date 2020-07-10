import { actionCreators, CounterState, reducer } from "../store/Counter";

describe("Counter", () => {
    test("returns proper state", async () => {
        const currentState: CounterState = {
            count: 10
        }
        expect(reducer(currentState, actionCreators.increment())).toEqual({ count: 11 });
        expect(reducer(currentState, actionCreators.decrement())).toEqual({ count: 9 });
        expect(reducer(undefined, actionCreators.decrement())).toEqual({ count: 0 });
        expect(reducer(currentState, { type: 'XXX' } )).toEqual({ count: 10 });
    })
});
