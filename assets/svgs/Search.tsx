import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const Search = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle
      cx={9.167}
      cy={9.167}
      r={6.667}
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.75 14.132 4.167 4.166"
    />
  </Svg>
)
export default Search