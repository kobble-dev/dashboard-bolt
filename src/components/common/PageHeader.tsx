import { Group } from '@mantine/core';
import { Text } from '@mantine/core';

interface PageHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <Group justify="space-between" className="mb-6">
      <Text size="xl" fw={700} className="text-gray-900">
        {title}
      </Text>
      {actions}
    </Group>
  );
}