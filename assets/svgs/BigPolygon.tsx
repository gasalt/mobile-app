
import { View } from "react-native"
import Svg, {
  SvgProps,
  G,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const BigPolygon = (props: SvgProps) => (

  <View style={{aspectRatio:1, display:"flex", height: props.height as number || 24, width: props.width as number || 24 }}>
  <Svg
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          d="M12 24c6.628 0 12-5.373 12-12S18.628 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12Z"
        />
      </Mask>
      <G mask="url(#b)">
        <Path fill="url(#c)" d="M25.136-1.136H-1.136v26.272h26.272V-1.136Z" />
      </G>
      <Path
        fill="#fff"
        d="m15.454 14.577 3.378-1.95a.58.58 0 0 0 .29-.503V8.222a.582.582 0 0 0-.29-.502l-3.378-1.95a.582.582 0 0 0-.58 0l-3.379 1.95a.581.581 0 0 0-.29.502v6.973l-2.369 1.368-2.369-1.368v-2.736l2.37-1.368 1.562.902v-1.835l-1.273-.735a.58.58 0 0 0-.58 0l-3.379 1.95a.581.581 0 0 0-.29.503v3.902c0 .206.112.399.29.502l3.38 1.95c.178.104.4.104.579 0l3.379-1.95a.581.581 0 0 0 .29-.502V8.806l.042-.025 2.327-1.343 2.369 1.368v2.736l-2.37 1.367-1.56-.9v1.835l1.271.734c.179.103.4.103.58 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={-5.938}
        x2={21.185}
        y1={1.023}
        y2={17.621}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A229C5" />
        <Stop offset={1} stopColor="#7B3FE4" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  </View>
)
export default BigPolygon

