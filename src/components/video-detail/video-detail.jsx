import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from 'react-player'
import renderHTML from 'react-render-html';



import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Loader, Videos } from "../";
import { ApiService } from "../service/api.service";


const VidioDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [relaetdVideo, setRelaetdVideo] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );

        setVideoDetail(data.items[0]);
        const reletedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelaetdVideo(reletedData.items);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

 

  if (!videoDetail?.snippet) return <Loader />;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
        <Box width={{ xs: "100%", md: "75%" }}>
             <ReactPlayer src={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          {videoDetail.snippet.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{
                marginTop: "10px",
                cursor: "pointer",
                ml: "10px",
                color: "black",
              }}
              deleteIcon={
                <Tag sx={{ bgcolor: "#efefef", borderRadius: "50%" }} />
              }
              onDelete={() => {}}
              variant="outlined"
            />
          ))}

          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail.snippet.title}
          </Typography>

          <Typography p={1}>
          
            {renderHTML(videoDetail.snippet.description)}
            </Typography>

          <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <Visibility sx={{color: "blue"}}/>
              {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <FavoriteOutlined sx={{color: "red"}}/>
              {parseInt(videoDetail.statistics.likeCount).toLocaleString()}{" "}
              likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <MarkChatRead  sx={{color: "brown"}}/>
              {parseInt(
                videoDetail.statistics.commentCount
              ).toLocaleString()}{" "}
              comment
            </Stack>
          </Stack>

          <Link
            style={{ textDecoration: "none", color: "#efefef" }}
            to={`/channel/${videoDetail?.snippet?.channelId}`}
          >
            <Stack
              py={1}
              px={2}
              direction="row"
              alignItems="center"
              gap="10px"
              marginTop="5px"
            >
              <Avatar
                alt={videoDetail.snippet.channelTitle}
                src={videoDetail.snippet.thumbnails.default.url}
              />
              <Typography variant="subtitle1" color='black'>
                {videoDetail.snippet.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "blue", ml: "5px" }}
                />
              </Typography>
            </Stack>
          </Link>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{md: 1, xs: 5}}
          justifyContent={'center'}
          alignItems={'center'}
          height={{ xs: "auto", md: "180vh" }}
          sx={{ overflow: "scroll" }}
        >
          <Typography variant="h6" mb={1} textAlign={"center"}>
            Suggested Videos
          </Typography>
          <Videos videos={relaetdVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VidioDetail;
