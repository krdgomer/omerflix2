import { Box, Grid, Typography } from "@mui/material";
import "./topratedhomepage.css";
import { ColorButton } from "../../../util/styles";

function TopRatedHomepage() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <img src="/shawsank.jpg" className="topratedimage" />
        </Grid>
        <Grid
          item
          xs={6}
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={4}
        >
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: "medium" }}>
              En beğenilen filmler
            </Typography>
          </Grid>
          <Grid item>
            <ColorButton variant="contained" size="large" href="/testmovie">
              KEŞFET
            </ColorButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopRatedHomepage;
