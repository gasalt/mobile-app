import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const Polygon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Circle cx={8} cy={8} r={8} fill="url(#b)" />
      <Path
        fill="#fff"
        d="m10.017 9.895 2.241-1.294a.385.385 0 0 0 .193-.334V5.68a.386.386 0 0 0-.193-.333L10.017 4.05a.386.386 0 0 0-.385 0L7.39 5.346a.386.386 0 0 0-.192.333v4.626l-1.572.907-1.572-.907V8.49l1.572-.908 1.037.599V6.963l-.845-.488a.385.385 0 0 0-.384 0L3.192 7.77A.385.385 0 0 0 3 8.103v2.588c0 .137.074.265.192.334l2.242 1.294a.387.387 0 0 0 .384 0l2.242-1.294a.386.386 0 0 0 .192-.333V6.066l.029-.016 1.543-.892 1.572.908V7.88l-1.572.908L8.79 8.19v1.217l.843.487a.387.387 0 0 0 .385 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={4}
        x2={13.333}
        y1={4}
        y2={17.333}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9530CF" />
        <Stop offset={1} stopColor="#7E3DE2" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Polygon
