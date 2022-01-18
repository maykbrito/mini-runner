import { getConsole, reRenderConsole } from './useStore'
import { safeStringify } from '@yehonadav/safestringify'
import { IConsoleMessage } from './types'

export const _log = console.log

const sendConsoleMessage = (props: IConsoleMessage) => {
  const date = new Date()
  getConsole().logs.push(
    ...props.messages.map(object => ({
      type: props.logLevel,
      message: safeStringify(object),
      object,
      date
    }))
  )
}

export const consoleLog = (...args: any[]) => {
  _log(...args)
  sendConsoleMessage({ logLevel: 'log', messages: args })
  reRenderConsole()
}

export const setLoggerFunctions = () => (console.log = consoleLog)
