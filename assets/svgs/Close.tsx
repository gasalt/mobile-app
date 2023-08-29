import Svg, { SvgProps, Path } from "react-native-svg"
const Close = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M19.78 4.72a.75.75 0 0 1 0 1.06l-13.5 13.5a.75.75 0 0 1-1.06-1.06l13.5-13.5a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.22 4.72a.75.75 0 0 1 1.06 0l13.5 13.5a.75.75 0 1 1-1.06 1.06L5.22 5.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Close