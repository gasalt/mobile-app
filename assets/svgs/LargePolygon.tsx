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
const LargePolygon = (props: SvgProps) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Circle cx={18} cy={18} r={18} fill="url(#b)" />
      <Path
        fill="#fff"
        d="m22.538 22.264 5.043-2.913a.867.867 0 0 0 .433-.75v-5.823a.87.87 0 0 0-.433-.75l-5.043-2.913a.868.868 0 0 0-.866 0l-5.044 2.913a.868.868 0 0 0-.432.75v10.408l-3.537 2.042-3.537-2.042v-4.084l3.537-2.042 2.333 1.347v-2.74l-1.9-1.097a.867.867 0 0 0-.866 0l-5.044 2.912a.867.867 0 0 0-.432.75v5.824a.87.87 0 0 0 .432.75l5.044 2.912a.87.87 0 0 0 .865 0l5.044-2.912a.868.868 0 0 0 .433-.75V13.649l.064-.036 3.473-2.006 3.536 2.042v4.084l-3.536 2.042-2.33-1.345v2.74l1.897 1.095a.87.87 0 0 0 .866 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9}
        x2={30}
        y1={9}
        y2={39}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9530CF" />
        <Stop offset={1} stopColor="#7E3DE2" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h36v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LargePolygon
