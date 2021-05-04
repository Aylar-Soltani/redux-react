import {CounterState, AdjustCounterAction, ADJUST_COUNTER } from '../../types'

export default function counter(
    state: CounterState = {count: 0},
    action: AdjustCounterAction
    ): CounterState {
        switch (action.type){
            case ADJUST_COUNTER:
                return{
                    ...state, count: state.count + 1
                }
                default:
                    return state
        }
    }