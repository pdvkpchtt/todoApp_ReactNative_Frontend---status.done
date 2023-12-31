import { Text } from "react-native";
import { useSelector } from "react-redux";

import ChangeTheme from "../../configs/ChangeTheme";

const TextMain = ({ text, additionStyles, ...props }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Text
      style={[
        {
          fontFamily: "SF-Pro-Display-Regular",
          fontSize: 16,
          color: ChangeTheme(theme).textMain,
        },
        additionStyles,
      ]}
      {...props}
    >
      {text}
    </Text>
  );
};

export default TextMain;
