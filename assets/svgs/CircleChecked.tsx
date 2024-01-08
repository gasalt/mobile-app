import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const CircleChecked = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <Circle cx={12.5} cy={12} r={8.5} fill="#4A41C7" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 11.5 2 2 4-4"
    />
  </Svg>
)
export default CircleChecked
