import Svg, { SvgProps, Path } from "react-native-svg"
const Back = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8 16-3.293-3.293a1 1 0 0 1 0-1.414L8 8M5 12h14"
    />
  </Svg>
)
export default Back