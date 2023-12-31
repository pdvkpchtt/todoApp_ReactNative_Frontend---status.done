import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";

import { themeSlice } from "../../store/themeSlice";
import Card from "../../shared/ui/Card";
import TextMain from "../../shared/Text/TextMain";
import ChangeTheme from "../../configs/ChangeTheme";
import CustomSwitch from "../../shared/ui/CustomSwitch";

import ColorPaletteIcon from "../../shared/Icons/ColorPaletteIcon";

const SwitchThemeCard = ({ ...props }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Card
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <ColorPaletteIcon fill={ChangeTheme(theme).subAccent} />

        <TextMain
          text="Switch to darkmode"
          numberOfLines={1}
          additionStyles={{ marginLeft: 8, fontSize: 18, flex: 1 }}
        />
      </View>

      <CustomSwitch
        value={theme.includes("_dark")}
        onValueChange={() =>
          theme.includes("_dark")
            ? dispatch(themeSlice.actions.setTheme(theme.replace("_dark", "")))
            : dispatch(themeSlice.actions.setTheme(theme + "_dark"))
        }
      />
    </Card>
  );
};

export default SwitchThemeCard;
