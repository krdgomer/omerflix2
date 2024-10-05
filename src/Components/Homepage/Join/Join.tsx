import { Box, Grid, Typography } from "@mui/material";
import "./join.css";
import { ColorButton } from "../../../util/styles";

function Join() {
  return (
    <Box>
      <Grid container>
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
              Binlerce film ayağının altında
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Aylık 9.99 TL'ye üye olarak sınırsız sinema keyfine eriş
            </Typography>
          </Grid>
          <Grid item>
            <ColorButton variant="contained" size="large">
              ARAMIZA KATIL
            </ColorButton>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src="/filmsbg.png" className="joinimage" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Join;
