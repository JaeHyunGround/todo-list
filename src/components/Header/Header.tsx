'use client';

import { useViewport } from '@/hooks/useViewport';
import { HeaderContainer, HeaderWrapper } from './Header.style';
import { breakpoints } from '@/constants/breakpoints';
import Image from 'next/image';

const Header = () => {
  const { viewportWidth } = useViewport();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Image
          src={
            viewportWidth > breakpoints.mobile
              ? '/images/logo-large.png'
              : '/images/logo-small.png'
          }
          alt="logo"
          width={viewportWidth > breakpoints.mobile ? 151 : 71}
          height={40}
          onClick={() => (window.location.href = '/')}
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
