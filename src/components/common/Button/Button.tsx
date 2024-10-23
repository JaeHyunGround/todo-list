import Image from 'next/image';
import { ButtonContainer } from './Button.style';
import { ButtonProps } from './Button.type';

/**
 * Button 컴포넌트
 *
 * @param width 필수 | string 타입 : 버튼의 너비, px, %, vw 등 길이를 나타내는 단위와 함께 사용
 * @param height 필수 | string 타입 : 버튼의 높이, px, %, vh 등 길이를 나타내는 단위와 함께 사용
 * @param text 선택 | string 타입 (기본값 : '') : 버튼에 들어갈 텍스트
 * @param fontSize 선택 | string 타입 (기본값 16px) : 버튼 텍스트의 크기
 * @param fontWeight 선택 | string 타입 (기본값 700) : 버튼 텍스트의 굵기
 * @param color 선택 | 'var(--slate-900)' | 'var(--white)' 중 하나 (기본값 'var(--slate-900)') : 버튼 텍스트의 색상
 * @param background 필수 | string 타입 : 버튼의 색깔
 * @param icon 필수 | 'check' | 'plus-gray' | 'plus-white' | 'x' | 'edit' 중 하나 : 버튼에 들어갈 아이콘
 * @param buttonIconSize 선택 | number 타입 (기본값 16) : 버튼에 들어갈 아이콘의 사이즈
 * @param border 선택 | boolean 타입 (기본값 false) : 버튼의 border 유무
 * @param borderRadius 선택 | string 타입 (기본값 50px) : 버튼의 둥글기 조절
 * @param borderShadow 선택 | boolean 타입 (기본값 true) : 버튼 쉐도우 출력 유무
 * @param onClick 선택 | onClick 이벤트에 들어갈 콜백 함수
 * @param iconMargin 선택 | boolean 타입 (기본값 true) : 아이콘 옆 마진 유무
 * @example
 * <Button
        width="168px"
        height="52px"
        text="추가하기"
        fontSize="var(--font-size-base)"
        fontWeight="var(--font-weight-700)"
        color="var(--slate-900)"
        background="var(--slate-200)"
        icon="plus-gray"
        buttonIconSize={16}
        borderRadius="50px"
        border={false}
        borderShadow={false}
        onClick={이벤트에 들어갈 콜백 함수}
        iconMargin={true}
      />
 */

const Button = ({
  width,
  height,
  text = '',
  fontSize = 'var(--font-size-base)',
  fontWeight = 'var(--font-weight-700)',
  color = 'var(--slate-900)',
  background,
  icon,
  buttonIconSize = 16,
  border = false,
  borderRadius = '50px',
  borderShadow = true,
  onClick,
  iconMargin = true,
}: ButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
      borderShadow={borderShadow}
      onClick={onClick}
      iconMargin={iconMargin}
    >
      <Image
        width={buttonIconSize}
        height={buttonIconSize}
        src={`/icons/${icon}.png`}
        alt="button icon"
      />
      {text ? text : null}
    </ButtonContainer>
  );
};

export default Button;
