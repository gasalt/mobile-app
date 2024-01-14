import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  Circle, 
  Text,
  TSpan,
} from "react-native-svg"
import { StyleSheet, View } from "react-native";
import { DefaultText } from "@/components/Defaults";

interface CoinLogoT extends SvgProps {
  image?: string | null;
  symbol?: string
}



const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 25, 
    borderRadius: 50, 
    backgroundColor: 'transparent', 
    borderColor: 'lightgray',
    borderWidth: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 1,
  },
});


const CoinLogo = (props: CoinLogoT) => {

  return !props.image && props.symbol ? <View style={styles.circle}>
    <DefaultText style={{ fontSize: 6 }}>{props.symbol}</DefaultText> 
    </View> :
         
          <Svg
            width={25}
            height={24}
            fill="none"
            {...props}
          >
             
      <Path fill="url(#a)" d="M.5 0h24v24H.5z" />
            <Defs>
              <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
              >
                <Use xlinkHref="#b" transform="scale(.00781)" />
              </Pattern>
              <Image
                xlinkHref={`${props.image}`}
                id="b"
                width={128}
                height={128}
              />
            </Defs>
            
          </Svg>
}
export default CoinLogo


