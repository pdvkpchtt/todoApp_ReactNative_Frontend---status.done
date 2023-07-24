import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ fill, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="white"
      d="M20 10a1 1 0 1 0-2 0h2ZM6 10a1 1 0 0 0-2 0h2Zm14.293 2.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM12 3l.707-.707a1 1 0 0 0-1.414 0L12 3Zm-9.707 8.293a1 1 0 1 0 1.414 1.414l-1.414-1.414ZM7 22h10v-2H7v2Zm13-3v-9h-2v9h2ZM6 19v-9H4v9h2Zm15.707-7.707l-9-9l-1.414 1.414l9 9l1.414-1.414Zm-10.414-9l-9 9l1.414 1.414l9-9l-1.414-1.414ZM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2ZM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3v-2Z"
    />
  </Svg>
);
export default HomeIcon;
