import Svg, { SvgProps, Path } from "react-native-svg"
const Copy = (props: SvgProps) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4A41C7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.833 6h-6C7.097 6 6.5 6.597 6.5 7.333v6c0 .737.597 1.334 1.333 1.334h6c.737 0 1.334-.597 1.334-1.334v-6c0-.736-.597-1.333-1.334-1.333Z"
    />
    <Path
      stroke="#4A41C7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.833 10h-.666a1.333 1.333 0 0 1-1.334-1.333v-6a1.333 1.333 0 0 1 1.334-1.334h6A1.333 1.333 0 0 1 10.5 2.667v.666"
    />
  </Svg>
)
export default Copy
