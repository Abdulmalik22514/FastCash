import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const FrontArrow = (props: any) => {
  return (
    <Svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.867 1L11 6m0 0l-5.133 5M11 6H0"
        stroke={props.color || '#B80074'}
        strokeWidth={2}
      />
    </Svg>
  );
};

export const BackArrow = (props: any) => {
  return (
    <Svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.133 1L2 6m0 0l5.133 5M2 6h11"
        stroke={props.color || '#B80074'}
        strokeWidth={2}
      />
    </Svg>
  );
};

export const CheckMark = (props: any) => {
  return (
    <Svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 2.5L3 4.5L7 0.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const FlagIcon = (props: any) => {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_3963_1373)">
        <Rect y={0.25} width={18} height={18} rx={9} fill="#fff" />
        <Path fill="#219653" d="M0 -4.75H6V21.25H0z" />
        <Path fill="#219653" d="M12 -4.75H18.35294V21.25H12z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3963_1373">
          <Rect y={0.25} width={18} height={18} rx={9} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const ArrowDown = (props: any) => {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 9.25l6 6 6-6"
        stroke="#8B9EAB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CalenderIcon = (props: any) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.582 20h12.835C20.13 20 21 19.13 21 17.475V6.515C21 4.87 20.13 4 18.418 4H5.582C3.88 4 3 4.851 3 6.515v10.96C3 19.14 3.88 20 5.582 20zm-.048-.917c-1.044 0-1.605-.54-1.605-1.58V9.485c0-1.04.56-1.58 1.605-1.58h12.922c1.026 0 1.616.54 1.616 1.58v8.018c0 1.04-.59 1.58-1.616 1.58H5.534zm4.633-8.029h.532c.27 0 .329-.056.329-.312v-.53c0-.245-.058-.302-.329-.302h-.532c-.27 0-.329.057-.329.303v.53c0 .255.058.311.33.311zm3.134 0h.532c.27 0 .329-.056.329-.312v-.53c0-.245-.058-.302-.33-.302h-.531c-.27 0-.329.057-.329.303v.53c0 .255.058.311.329.311zm3.124 0h.542c.26 0 .329-.056.329-.312v-.53c0-.245-.068-.302-.33-.302h-.541c-.261 0-.329.057-.329.303v.53c0 .255.068.311.329.311zm-9.392 3.017h.542c.261 0 .329-.057.329-.312v-.53c0-.255-.068-.312-.329-.312h-.542c-.26 0-.329.057-.329.312v.53c0 .255.068.312.33.312zm3.134 0h.532c.27 0 .329-.057.329-.312v-.53c0-.255-.058-.312-.329-.312h-.532c-.27 0-.329.057-.329.312v.53c0 .255.058.312.33.312zm3.134 0h.532c.27 0 .329-.057.329-.312v-.53c0-.255-.058-.312-.33-.312h-.531c-.27 0-.329.057-.329.312v.53c0 .255.058.312.329.312zm3.124 0h.542c.26 0 .329-.057.329-.312v-.53c0-.255-.068-.312-.33-.312h-.541c-.261 0-.329.057-.329.312v.53c0 .255.068.312.329.312zm-9.392 3.007h.542c.261 0 .329-.057.329-.312v-.52c0-.255-.068-.312-.329-.312h-.542c-.26 0-.329.057-.329.312v.52c0 .255.068.312.33.312zm3.134 0h.532c.27 0 .329-.057.329-.312v-.52c0-.255-.058-.312-.329-.312h-.532c-.27 0-.329.057-.329.312v.52c0 .255.058.312.33.312zm3.134 0h.532c.27 0 .329-.057.329-.312v-.52c0-.255-.058-.312-.33-.312h-.531c-.27 0-.329.057-.329.312v.52c0 .255.058.312.329.312z"
        fill="#0898A0"
      />
    </Svg>
  );
};
