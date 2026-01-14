import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${video?.snippet?.channelId}`}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/channel/${video?.snippet?.channelId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #000",
          }}
        />
        <Typography variant="h6">
            {video?.snippet?.title} <CheckCircle sx={{fontSize: '14px', color: 'blue', ml: '5px'}}/>
        </Typography>
        {video?.statistics?.subsriberCount && (
            <Typography sx={{fontSize: '15px', fontWeight: 500, color: '#000'}}>
                {parseInt(video?.statistics?.subsriberCount).toLocaleString('en-US')}Subscribers
            </Typography>
        )}
        </Link>
      </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
