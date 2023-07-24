import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path, G, Circle } from "react-native-svg";
import { useSelector } from "react-redux";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AnimatedMoonIcon = ({ fill, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(theme.includes("_dark") ? "90deg" : "0deg", {
            duration: 250,
            damping: 35,
          }),
        },
      ],
    };
  });

  return (
    <AnimatedSvg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 256 256"
      style={animatedStyle}
      {...props}
    >
      <Path
        fill="white"
        d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97Zm-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41Z"
      />
    </AnimatedSvg>
  );
};
export default AnimatedMoonIcon;