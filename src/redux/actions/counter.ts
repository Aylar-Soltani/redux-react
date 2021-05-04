import { ADJUST_COUNTER, AdjustCounterAction} from "../../types";
export   function AdjustCounter (): AdjustCounterAction {
    return{
        type: ADJUST_COUNTER,
    }
}