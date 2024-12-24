import { Text } from '@mantine/core';

interface InfoRowProps {
  label: string;
  children: React.ReactNode;
  noBorder?: boolean;
}

export function InfoRow({ label, children, noBorder = false }: InfoRowProps) {
  return (
    <div className={`${!noBorder && 'border-b border-gray-100'}`}>
      <Text size="sm" c="dimmed" component="div" mb={0.5}>
        {label}
      </Text>
      <Text size="sm" fw={500} component="div" className="pb-2">
        {children}
      </Text>
    </div>
  );
}