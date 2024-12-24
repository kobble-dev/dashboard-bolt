import { Stack, Text, Button } from '@mantine/core';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CardNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Stack align="center" gap="md">
        <AlertCircle size={48} className="text-red-500" />
        <Text size="xl" fw={700} c="red">Card Not Found</Text>
        <Text c="dimmed" className="text-center max-w-md">
          The card you're looking for doesn't exist or you don't have permission to view it.
        </Text>
        <Button
          onClick={() => navigate('/cards')}
          leftSection={<ArrowLeft size={16} />}
          variant="light"
          color="gray"
        >
          Back to Cards
        </Button>
      </Stack>
    </div>
  );
}