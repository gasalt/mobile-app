import Svg, { SvgProps, Path } from "react-native-svg"
const AddMultiple = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M4.667.833A3.833 3.833 0 0 0 .833 4.667v6.666a3.833 3.833 0 0 0 3.834 3.834h6.666a3.833 3.833 0 0 0 3.834-3.834V4.667A3.833 3.833 0 0 0 11.333.833H4.667ZM10.5 8a.5.5 0 0 1-.5.5H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 .5.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AddMultiple
