import Svg, { SvgProps, Path } from "react-native-svg"
const DownLeft = (props: SvgProps) => (
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
      d="M11.854 17.303H7.197a1 1 0 0 1-1-1v-4.657M6.904 16.596l9.9-9.9"
    />
  </Svg>
)
export default DownLeft