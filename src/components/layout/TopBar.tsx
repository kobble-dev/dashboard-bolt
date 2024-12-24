import { Group, Text, UnstyledButton, Avatar } from '@mantine/core';
import { Bell, HelpCircle, Settings, Menu, X } from 'lucide-react';
import { SearchBar } from '../search/SearchBar';
import { useSearchStore } from '../../store/searchStore';
import { useNavigationStore } from '../../store/navigationStore';

export function TopBar() {
  const { search, setSearch } = useSearchStore();
  const { collapsed, setCollapsed } = useNavigationStore();

  return (
    <div className="h-16 border-b border-[#2C2E33] bg-[#1A1B1E] px-6 flex items-center justify-between gap-4">
      <Group gap="xs">
        <UnstyledButton 
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-[#00875A] hover:bg-[#006644] text-white"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </UnstyledButton>
        <Text size="xl" fw={700} c="white" className="whitespace-nowrap">
          Kobble.
        </Text>
      </Group>
      
      <div className="flex-1 flex justify-center">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      
      <Group className="whitespace-nowrap">
        <UnstyledButton className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2C2E33]">
          <HelpCircle size={20} className="text-white" />
        </UnstyledButton>
        <UnstyledButton className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2C2E33]">
          <Settings size={20} className="text-white" />
        </UnstyledButton>
        <UnstyledButton className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2C2E33]">
          <Bell size={20} className="text-white" />
        </UnstyledButton>
        
        <UnstyledButton className="flex items-center gap-2 rounded-full hover:bg-[#2C2E33] p-1">
          <Avatar 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" 
            size={32} 
            radius="xl"
          />
          <div className="hidden sm:block">
            <Text size="sm" fw={500} c="white">John Doe</Text>
            <Text size="xs" c="dimmed">Administrator</Text>
          </div>
        </UnstyledButton>
      </Group>
    </div>
  );
}