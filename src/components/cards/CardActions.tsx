import { Group } from '@mantine/core';
import { Download, Settings2 } from 'lucide-react';
import { ActionButton } from '../buttons/ActionButton';

export function CardActions() {
  return (
    <div className="mb-6 flex justify-end items-center">
      <Group>
        <ActionButton
          variant="outline"
          icon={Download}
          label="Download"
        />
        <ActionButton
          variant="outline"
          icon={Settings2}
          label="Manage view"
        />
        <ActionButton
          label="Issue Card"
        />
      </Group>
    </div>
  );
}