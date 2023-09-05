import Svg, { SvgProps, Path } from "react-native-svg"
const RightCaret = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#A69FFF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 5 5.33 6.22a1.2 1.2 0 0 1 0 1.56L9 19"
    />
  </Svg>
)
export default RightCaret
