import { Text } from '@mantine/core';

interface CardHolderCellProps {
  name: string;
  email: string;
}

export function CardHolderCell({ name, email }: CardHolderCellProps) {
  return (
    <div>
      <Text size="sm" fw={500} c="dark">
        {name}
      </Text>
      <Text size="xs" c="dimmed">
        {email}
      </Text>
    </div>
  );
}