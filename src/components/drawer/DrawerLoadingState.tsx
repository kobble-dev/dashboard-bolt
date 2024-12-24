import { Stack, Skeleton } from '@mantine/core';

export function DrawerLoadingState() {
  return (
    <Stack className="p-3 space-y-4">
      {/* Card Art Skeleton */}
      <Skeleton height={200} radius="lg" />
      
      {/* Section Skeletons */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-2">
          <Skeleton height={16} width={100} />
          <div className="border border-gray-100 rounded-lg p-3 space-y-3">
            {[1, 2, 3].map((j) => (
              <div key={j} className="space-y-1">
                <Skeleton height={12} width={80} />
                <Skeleton height={16} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Stack>
  );
}