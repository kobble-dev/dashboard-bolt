import { Component, type ReactNode } from 'react';
import { Text, Button, Stack } from '@mantine/core';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <Stack align="center" gap="md">
            <Text size="xl" fw={700} c="red">Something went wrong</Text>
            <Text c="dimmed">We apologize for the inconvenience</Text>
            <Button onClick={this.handleReset}>Try again</Button>
          </Stack>
        </div>
      );
    }

    return this.props.children;
  }
}