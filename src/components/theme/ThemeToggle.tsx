import { ActionIcon, Tooltip } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const isDark = colorScheme === 'dark';

  return (
    <Tooltip label={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      <ActionIcon
        onClick={toggleColorScheme}
        variant="subtle"
        size="lg"
        className={isDark 
          ? 'text-white hover:bg-[#262626]' 
          : 'text-gray-900 hover:bg-gray-100'
        }
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </ActionIcon>
    </Tooltip>
  );
}