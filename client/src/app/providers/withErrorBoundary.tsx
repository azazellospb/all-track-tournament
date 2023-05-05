import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: {
      stack: undefined,
      name: '',
      message: '',
      cause: undefined
    }
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  // eslint-disable-next-line class-methods-use-this
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { message, name, stack } = this.state.error
    if (this.state.hasError) {
      return (
        <>
          <h1>Sorry.. there was an error: ${name}</h1>)<div>Error: ${message}</div>
          <div>Stack: ${stack}</div>
        </>
      )
    }

    return this.props.children
  }
}

export const withErrorBoundary = (component: () => React.ReactNode) => () =>
  <ErrorBoundary>{component()}</ErrorBoundary>
