import Svg, { SvgProps, Path } from "react-native-svg"
const UpRight = (props: SvgProps) => (
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
      d="M12.146 6.697h4.657a1 1 0 0 1 1 1v4.657M17.096 7.404l-9.9 9.9"
    />
  </Svg>
)
export default UpRight