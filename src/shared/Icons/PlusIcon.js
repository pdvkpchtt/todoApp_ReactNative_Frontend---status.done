import Svg, { Path } from "react-native-svg";

const PlusIcon = ({ fill, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 256 256"
  >
    <Path
      fill="white"
      d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"
    />
  </Svg>
);
export default PlusIcon;
