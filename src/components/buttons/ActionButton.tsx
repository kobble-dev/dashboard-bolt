import { Button, type ButtonProps } from '@mantine/core';
import type { LucideIcon } from 'lucide-react';

interface ActionButtonProps extends ButtonProps {
  icon?: LucideIcon;
  label: string;
}

export function ActionButton({ icon: Icon, label, ...props }: ActionButtonProps) {
  return (
    <Button
      leftSection={Icon && <Icon size={16} />}
      className={props.variant === 'outline' 
        ? 'border-gray-200 text-gray-700 hover:bg-gray-50'
        : 'bg-[#00875A] hover:bg-[#006644] text-white'
      }
      {...props}
    >
      {label}
    </Button>
  );
}