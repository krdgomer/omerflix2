import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardMedia,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export const StyledCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  width: 300,
  height: 450,
  "&:hover .media": {
    filter: "blur(5px)",
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
  },
  "&:hover .overlay": {
    opacity: 1,
    transition: "opacity 0.3s ease",
  },
});

export const Media = styled(CardMedia)({
  width: 300,
  height: 450,
  transition: "all 0.3s ease",
});

export const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  opacity: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  textAlign: "center",
});
