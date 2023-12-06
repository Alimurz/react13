import { INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER} from "./types"

const incrementCounterActionCreator = () => ({
    type: INCREMENT_COUNTER
})

const decrementCounterActionCreator = () => ({
    type: DECREMENT_COUNTER
})
const clearCounterActionCreator = () => ({
    type: CLEAR_COUNTER,
})

export {
    incrementCounterActionCreator,
    decrementCounterActionCreator,
    clearCounterActionCreator
}