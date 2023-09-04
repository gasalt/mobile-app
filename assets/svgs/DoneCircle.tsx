import Svg, { SvgProps, Path } from "react-native-svg"
const DoneCircle = (props: SvgProps) => (
  <Svg
    width={120}
    height={120}
    fill="none"
    {...props}
  >
    <Path
      stroke="#12CA2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M110 55.52v4.569a49.437 49.437 0 0 1-9.953 29.704 50.003 50.003 0 0 1-25.87 17.887 50.327 50.327 0 0 1-31.505-1.039 49.94 49.94 0 0 1-24.617-19.553 49.397 49.397 0 0 1-7.947-30.295 49.475 49.475 0 0 1 11.883-28.996 50.062 50.062 0 0 1 26.99-16.173 50.318 50.318 0 0 1 31.369 3.078"
    />
    <Path
      stroke="#12CA2F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M110 20.363 60 70.07 45 55.173"
    />
  </Svg>
)
export default DoneCircle
