import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { X } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box sx={{ width: "100%", backgroundColor: " #121212" }}>
      <Grid container direction={"column"} sx={{ pl: 20, pr: 20, pt: 5 }}>
        <Grid
          item
          container
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ pb: 2 }}
        >
          <Grid item>
            <img src="src/assets/logo.png" alt="logo" className="footerimage" />
          </Grid>
          <Grid item>
            <Button>
              <FacebookIcon />
            </Button>
            <Button>
              <InstagramIcon />
            </Button>
            <Button>
              <X />
            </Button>
            <Button>
              <YouTubeIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid item container spacing={3}>
          {/* Movie Categories */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Film Kategorileri
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Aksiyon" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Macera" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Animasyon" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Komedi" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Polisiye" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          {/* TV Series */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#121212" }}>
              -
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Dram" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Korku" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Gizem" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Romantik" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Destek
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Hesabım" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="SSS" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="TV'den İzle" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Çözüm Merkezi" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="İletişim" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "#0d0d0d", pt: 1, pb: 1, pl: 20 }}>
        Copyright © 2024, Omerflix. All Rights Reserved{" "}
      </Box>
    </Box>
  );
}

export default Footer;
