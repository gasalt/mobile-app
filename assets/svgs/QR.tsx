import Svg, { SvgProps, Path } from "react-native-svg"
const QR = (props: SvgProps) => (
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
      d="M21 8.85V7a4 4 0 0 0-4-4h-1.85M21 15.15V17a4 4 0 0 1-4 4h-1.85m-6.3 0H7a4 4 0 0 1-4-4v-1.85m0-6.3V7a4 4 0 0 1 4-4h1.85"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12H2"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1.25H6V9Zm0 2.75v.5h12v-.5H6Zm0 2h12V15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1.25Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default QR
