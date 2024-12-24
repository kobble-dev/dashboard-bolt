import { Component, type ReactNode } from 'react';
import { Text, Button, Stack } from '@mantine/core';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class TableErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Stack align="center" gap="md" className="py-8">
          <Text c="red">Failed to load table data</Text>
          <Button onClick={this.handleRetry} size="sm">
            Try again
          </Button>
        </Stack>
      );
    }

    return this.props.children;
  }
}