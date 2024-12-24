import { Text } from '@mantine/core';
import { useThemeStore } from '../../store/themeStore';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ title, children, className = '' }: PageLayoutProps) {
  const { colorScheme } = useThemeStore();

  return (
    <div className={`min-h-screen ${colorScheme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-gray-50'} p-6`}>
      <Text size="xl" fw={700} className="text-gray-900 mb-6">
        {title}
      </Text>
      
      <div className={`bg-white rounded-xl p-6 ${className}`}>
        {children}
      </div>
    </div>
  );
}