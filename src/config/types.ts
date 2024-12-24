import type { TableColumn } from '../components/table/types';
import type { SortDirection } from '../utils/table/types';

export interface TableConfig<T> {
  columns: TableColumn<T>[];
  defaultSort?: {
    key: keyof T;
    direction: SortDirection;
  };
  defaultPageSize?: number;
}