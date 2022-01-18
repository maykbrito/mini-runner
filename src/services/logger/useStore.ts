import createStore from 'zustand'
import { ConsoleState, State } from './types'

const state: State = {
  console: { logs: [] }
}

const stateCreator = (): State => state

const useStore = createStore<State>(stateCreator)

// getters
const get = useStore.getState
const getConsole = (): ConsoleState => get().console

// setters
const set = useStore.setState
const setConsoleLogs = (): void =>
  set(state => ({ console: { ...state.console, logs: [] } }))

// actions
const reRenderConsole = (): void =>
  set((state: State) => ({ console: { ...state.console } }))

// helpers
const fetchConsole = (state: State) => state.console

// hooks
const useConsole = (): ConsoleState => useStore(fetchConsole)

export {
  useStore as useConsoleStore,
  get as getConsoleStoreState,
  set as setConsoleStoreState,
  getConsole,
  setConsoleLogs,
  reRenderConsole,
  useConsole
}
