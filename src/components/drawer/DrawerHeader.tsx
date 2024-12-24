import { ActionIcon } from '@mantine/core';
import { X } from 'lucide-react';

interface DrawerHeaderProps {
  onClose: () => void;
}

export function DrawerHeader({ onClose }: DrawerHeaderProps) {
  return (
    <div className="flex-none border-b border-gray-200 p-2 flex justify-end">
      <ActionIcon 
        variant="subtle"
        onClick={onClose}
        className="hover:bg-gray-100 text-gray-700"
        size="lg"
      >
        <X size={20} />
      </ActionIcon>
    </div>
  );
}