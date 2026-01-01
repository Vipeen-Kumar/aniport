import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Something went wrong.</h1>
          <p className="text-lg text-zinc-400 mb-8 text-center">
            The application encountered an unexpected error. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
          >
            Refresh Page
          </button>
          {import.meta.env.DEV && (
            <pre className="mt-8 p-4 bg-zinc-950 rounded overflow-auto max-w-full text-xs text-red-400">
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
