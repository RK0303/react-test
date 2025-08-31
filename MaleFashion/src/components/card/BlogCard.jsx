import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function BlogCard({image, date, title}) {
  return (
    <Card sx={{ maxWidth: 320, boxShadow: "none", position: "relative", overflow:'visible' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Blog cover"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          left: 30,
          right: 20,
          bgcolor: "#fff",
          p: 2,
          boxShadow: 3,
          maxWidth:'260px'
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: "#666" }} />
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Box>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, fontWeight: "bold", letterSpacing: 1, cursor:'pointer' }}
        >
          READ MORE
        </Typography>
      </Box>
    </Card>
  );
}
