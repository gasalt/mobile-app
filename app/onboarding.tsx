import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { slides } from "@/utils/slides";
import { useState } from "react";
import { DefaultText, DefaultView } from "@/components/Defaults";
import { Redirect, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }: { [key: string]: any }) => {
  return (
    <DefaultView
      style={{
        alignItems: "flex-start",
        width,
        justifyContent: "center",
        marginTop: -30,
      }}
    >
      {/* marginLeft was added cos of the size of the second image. Design need to ensure the images are of equal width */}
      <DefaultView
        style={{
          height: height * 0.33,
          width,
          marginLeft: item.id === 2 ? -50 : 0,
        }}
      >
        {item.image}
      </DefaultView>
      <DefaultText style={styles.slideTitle}>{item.title}</DefaultText>
    </DefaultView>
  );
};

export default function Onboarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const router = useRouter();

  
  const Footer = () => {
    const onPress = () => {
      router.push("/login");
    };
    return (
      <DefaultView style={styles.footer}>
        <DefaultView style={styles.pagination}>
          {slides.map((_, index) => (
            <DefaultView
              key={index}
              style={[
                styles.paginationItem,
                currentSlideIndex == index && {
                  backgroundColor: "#2c257e",
                  width: 20,
                },
              ]}
            />
          ))}
        </DefaultView>

        <DefaultView style={{ marginBottom: 20 }}>
          <CustomButton
            btnStyle={styles.button}
            label="Get started"
            onPress={onPress}
            variant="primary"
          />
        </DefaultView>
      </DefaultView>
    );
  };

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0d0c27" }}>
      <StatusBar backgroundColor={"#4a41c7"} />
      <DefaultView style={styles.top}>
        <DefaultText style={styles.title}>Gasalt</DefaultText>
      </DefaultView>
      <FlatList
        data={slides}
        pagingEnabled
        contentContainerStyle={{
          height: height * 0.5,
          padding: 20,
        }}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
      />

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "600",
    marginTop: 20,
    padding: 20,
  },

  slideTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 40,
    width: width * 0.75,
    textAlign: "left",
    marginTop: 40,
  },
  footer: {
    height: height * 0.16,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  paginationItem: {
    height: 10,
    width: 10,
    backgroundColor: "#68687b",
    marginHorizontal: 3,
    marginTop: -40,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#4a41c7",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
