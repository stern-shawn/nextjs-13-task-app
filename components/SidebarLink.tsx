'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Settings, User, Grid, Calendar } from 'react-feather';

import { SidebarLinkData } from './Sidebar';

const icons = { Settings, User, Grid, Calendar };
export type IconName = keyof typeof icons;

const SidebarLink: FC<{ link: SidebarLinkData }> = ({ link }) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;

  const Icon = icons[link.icon];

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
          isActive && 'stroke-violet-600'
        )}
      />
    </Link>
  );
};

export default SidebarLink;
