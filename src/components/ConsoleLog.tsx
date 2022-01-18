import { useConsole, setLoggerFunctions } from '../services/logger';


const onConsoleLoad = () => {
  setLoggerFunctions()
}

onConsoleLoad();

export function ConsoleLog() {
  const consoleLog = useConsole();

  return (
    <fieldset>
      <legend>Results</legend>
      {consoleLog.logs.map((logMessage, index) => (
        <pre key={index}>
          {logMessage.message}
        </pre>
      ))}
    </fieldset>
  )
}
