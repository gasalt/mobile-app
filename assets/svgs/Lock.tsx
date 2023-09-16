import Svg, { SvgProps, Path } from "react-native-svg"
const Lock = (props: SvgProps) => (
  <Svg
    width={12}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M.167 7.667A3.167 3.167 0 0 1 3.333 4.5h5.334a3.167 3.167 0 0 1 3.166 3.167v2.666A3.167 3.167 0 0 1 8.667 13.5H3.333a3.167 3.167 0 0 1-3.166-3.167V7.667Zm6.583.666a.75.75 0 0 0-1.5 0v1.334a.75.75 0 1 0 1.5 0V8.333Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M8.667 5V3.667a2.667 2.667 0 0 0-5.333 0V5"
    />
  </Svg>
)
export default Lock