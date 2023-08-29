import Svg, { SvgProps, Path } from "react-native-svg"
const Refresh = (props: SvgProps) => (
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
      d="M18.928 8a8 8 0 0 0-14.236.746"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20.768 5.515-.73 3.16a1 1 0 0 1-1.199.75l-3.16-.73M5.072 16a8 8 0 0 0 14.236-.746"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m3.232 18.484.73-3.16a1 1 0 0 1 1.199-.748l3.16.729"
    />
  </Svg>
)
export default Refresh

