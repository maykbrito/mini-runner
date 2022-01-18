export type LogType = 'log'

export type LogMessage = {
  type: LogType
  date: Date
  message: string
  object: any
}

export type ConsoleState = {
  logs: LogMessage[]
}

export type State = {
  console: ConsoleState
}

export type Logger = Console & {
  setVersion: (version: string) => void
}

export interface IConsoleMessage {
  messages: any[]
  logLevel: LogType
}
