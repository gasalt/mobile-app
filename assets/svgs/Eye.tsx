import Svg, { SvgProps, Path } from "react-native-svg"
const Eye = (props: SvgProps) => (
  <Svg
    width={21}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10.5.25a10.769 10.769 0 0 0-9.457 5.606 2.384 2.384 0 0 0 0 2.288A10.769 10.769 0 0 0 10.5 13.75c4.081 0 7.631-2.267 9.457-5.606.39-.713.39-1.575 0-2.288A10.769 10.769 0 0 0 10.5.25Zm0 4.5a2.25 2.25 0 1 0 1.703 3.72 1.5 1.5 0 0 1 0-2.94 2.245 2.245 0 0 0-1.703-.78ZM6.75 7a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Eye