import { View } from "react-native"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const BigEth = (props: SvgProps) => (

  <View style={{ aspectRatio:1, display:"flex", height: props.height as number, width: props.width as number }}>
  <Svg
    width={"100%"}
    height={"100%"}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#627EEA"
        d="M12.5 24c6.627 0 12-5.373 12-12s-5.373-12-12-12S.5 5.373.5 12s5.373 12 12 12Z"
      />
      <Path
        fill="#fff"
        fillOpacity={0.602}
        d="M12.873 3v6.652l5.623 2.513L12.874 3Z"
      />
      <Path fill="#fff" d="M12.873 3 7.25 12.165l5.623-2.512V3Z" />
      <Path
        fill="#fff"
        fillOpacity={0.602}
        d="M12.873 16.476v4.52l5.627-7.784-5.627 3.264Z"
      />
      <Path fill="#fff" d="M12.873 20.996v-4.52L7.25 13.211l5.623 7.784Z" />
      <Path
        fill="#fff"
        fillOpacity={0.2}
        d="m12.873 15.43 5.623-3.265-5.622-2.511v5.776Z"
      />
      <Path
        fill="#fff"
        fillOpacity={0.602}
        d="m7.25 12.165 5.623 3.265V9.654L7.25 12.165Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
  </View>
)
export default BigEth

