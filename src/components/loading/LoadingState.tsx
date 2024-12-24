import { Loader, Stack, Text } from '@mantine/core';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <Stack align="center" gap="md" className="py-12">
      <Loader size="lg" />
      <Text c="dimmed">{message}</Text>
    </Stack>
  );
}