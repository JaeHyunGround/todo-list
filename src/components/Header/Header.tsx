'use client';

import { useViewport } from '@/hooks/useViewport';
import { HeaderContainer, HeaderWrapper } from './Header.style';
import { breakpoints } from '@/constants/breakpoints';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const { viewportWidth } = useViewport();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Image
          src={
            viewportWidth > breakpoints.tablet
              ? '/images/logo-large.png'
              : '/images/logo-small.png'
          }
          alt="logo"
          width={viewportWidth > breakpoints.tablet ? 151 : 71}
          height={40}
          onClick={
            pathname === '/' ? () => router.refresh() : () => router.push('/')
          }
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
