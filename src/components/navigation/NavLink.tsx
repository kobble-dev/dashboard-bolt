import { NavLink as MantineNavLink, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  to: string;
  active?: boolean;
}

export function NavLink({ icon: Icon, label, to, active }: NavLinkProps) {
  const navigate = useNavigate();

  return (
    <UnstyledButton
      onClick={() => navigate(to)}
      className="w-full"
    >
      <MantineNavLink
        label={label}
        leftSection={<Icon size={16} />}
        active={active}
        className={`rounded-md ${
          active 
            ? 'bg-[#00875A] hover:bg-[#006644] text-white' 
            : 'hover:bg-gray-100 text-gray-700'
        }`}
        classNames={{
          label: active ? 'text-white' : 'text-gray-700',
          section: active ? 'text-white' : 'text-gray-700',
        }}
      />
    </UnstyledButton>
  );
}