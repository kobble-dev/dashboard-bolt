import { Text } from '@mantine/core';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  withBorder?: boolean;
  className?: string;
}

export function Section({ title, children, withBorder = true, className = '' }: SectionProps) {
  return (
    <div>
      <Text 
        size="sm" 
        fw={600} 
        c="dimmed" 
        component="div" 
        className="uppercase tracking-wider mb-2"
      >
        {title}
      </Text>
      <div className={`rounded-lg ${withBorder ? 'border border-gray-100 p-3' : 'p-0'} ${className}`}>
        {children}
      </div>
    </div>
  );
}