import { TextInput } from '@mantine/core';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <TextInput
      placeholder="Search and filter by a card number, cardholder or date..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      leftSection={<Search size={16} className="text-gray-500" />}
      className="w-full max-w-xl"
      classNames={{
        input: 'bg-[#2C2E33] border-[#2C2E33] text-white placeholder:text-gray-500 focus:border-[#00875A]',
      }}
    />
  );
}