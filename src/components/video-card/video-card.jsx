import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  console.log(video)
  return (
    <Card sx={{ width:{xs: '100%', sm: '340px', md: '300px'}, boxShadow: "none", borderRadius: 4 , marginTop: '10px'}}>
      <Link to={`/video/${video.id.videoId}`}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{ width: {xs: '100%', sm: '300px'}, height: "160px" }}
      />
      </Link >
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: "4" }} fontSize={'12px'} color={colors.third}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
            {video?.snippet?.description.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"4px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
            <Typography variant="subtitle2" color="#33333" sx={{display:'flex', alignItems:'center'}}>
                {video?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize: '12px', color: 'blue', marginLeft: '5px'}}/>
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
