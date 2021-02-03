export const initialState = {
  count: 0,
  maxCount: 100,
  step: 1,
  initialCount: 0,
}

const INCREASE_COUNT = 'INCREASE_COUNT'
const DECREASE_COUNT = 'DECREASE_COUNT'
const SET_STEP = 'SET_STEP'
const SET_INITIAL_COUNT = 'SET_INITIAL_COUNT'
const SET_MAX_COUNT = 'SET_MAX_COUNT'
const RESET_COUNT = 'RESET_COUNT'
const SET_INIT_ALL = 'SET_INIT_ALL'

export const increaseCount = () => ({
  type: INCREASE_COUNT,
})

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
})

export const setStep = (step) => ({
  type: SET_STEP,
  payload: { step },
})

export const setInitialCount = (initialCount) => ({
  type: SET_INITIAL_COUNT,
  payload: { initialCount },
})

export const setMaxCount = (maxCount) => ({
  type: SET_MAX_COUNT,
  payload: { maxCount },
})

export const resetCount = () => ({
  type: RESET_COUNT,
})

export const setInitAll = () => ({
  type: SET_INIT_ALL,
})

const reducer = (state, action) => {
  const { count, step, maxCount, initialCount } = state

  switch (action.type) {
    case INCREASE_COUNT: {
      if (count + step <= maxCount) {
        return {
          ...state,
          count: count + step,
        }
      }

      return state
    }
    case DECREASE_COUNT: {
      if (count - step >= initialCount) {
        return {
          ...state,
          count: count - step,
        }
      }

      return state
    }
    case SET_STEP: {
      const { step } = action.payload

      return {
        ...state,
        step,
      }
    }
    case SET_INITIAL_COUNT: {
      const { count } = state
      const { initialCount } = action.payload

      return {
        ...state,
        initialCount,
        count: Math.max(initialCount, count),
      }
    }
    case SET_MAX_COUNT: {
      const { count } = state
      const { maxCount } = action.payload

      return {
        ...state,
        maxCount,
        count: Math.min(maxCount, count),
      }
    }
    case RESET_COUNT: {
      if (count !== initialCount) {
        return {
          ...state,
          count: initialCount,
        }
      }

      return state
    }

    case SET_INIT_ALL: {
      return initialState
    }
    default:
      return state
  }
}

export default reducer
