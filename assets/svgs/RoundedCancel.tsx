import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const RoundedCancel = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={11} fill="#EB5757" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.879 14.121 4.243-4.242M9.879 9.879l4.243 4.243"
    />
  </Svg>
)
export default RoundedCancel