import Svg, { SvgProps, Path } from "react-native-svg"
const Info = (props: SvgProps) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#4A41C7"
      fillRule="evenodd"
      d="M1.333 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 1.333 8Zm8-.667a.5.5 0 0 0-.5-.5H7.5a.5.5 0 0 0 0 1h.833v3.5a.5.5 0 1 0 1 0v-4Zm0-2.666a.5.5 0 1 0-1 0v.666a.5.5 0 1 0 1 0v-.666Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Info
