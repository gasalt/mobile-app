import Svg, { SvgProps, Path } from "react-native-svg"
const ClosedEye = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.195 17.244a10.808 10.808 0 0 1-4.402-4.35 2.384 2.384 0 0 1 0-2.288A10.769 10.769 0 0 1 12.25 5c2.057 0 3.98.576 5.614 1.575l-2.752 2.752a3.75 3.75 0 1 0-5.285 5.285l-2.632 2.632Zm1.474.647c1.12.395 2.326.609 3.581.609 4.081 0 7.631-2.267 9.457-5.606.39-.713.39-1.575 0-2.288a10.802 10.802 0 0 0-2.604-3.148l-3.25 3.25a3.75 3.75 0 0 1-4.646 4.646L8.67 17.89Zm3.581-6.141-1.585 1.596a2.25 2.25 0 0 1 2.949-3.387L12.25 11.75Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.5 4-15 15"
    />
  </Svg>
)
export default ClosedEye