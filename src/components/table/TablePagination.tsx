import { Group, Pagination, Select, Text } from '@mantine/core';

const ITEMS_PER_PAGE_OPTIONS = ['5', '10', '20', '50'] as const;

interface TablePaginationProps {
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function TablePagination({ 
  total,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex justify-end mb-4">
      <Group gap="sm">
        <Select
          value={pageSize.toString()}
          onChange={(value) => onPageSizeChange(Number(value))}
          data={ITEMS_PER_PAGE_OPTIONS.map(value => ({
            value: value,
            label: `${value} per page`,
          }))}
          size="sm"
          className="w-32"
          classNames={{
            input: 'bg-gray-100 border-0',
          }}
        />
        <Text size="sm" c="dimmed">|</Text>
        <Pagination
          value={page}
          onChange={onPageChange}
          total={totalPages}
          size="sm"
          withEdges
          classNames={{
            control: 'data-[active=true]:bg-[#00875A] data-[active=true]:hover:bg-[#006644] data-[active=true]:text-white',
          }}
        />
      </Group>
    </div>
  );
}