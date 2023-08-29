import Svg, { SvgProps, Path } from "react-native-svg"
const Dropdown = (props: SvgProps) => (
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
      d="m19 9-6.22 5.33a1.2 1.2 0 0 1-1.56 0L5 9"
    />
  </Svg>
)
export default Dropdown