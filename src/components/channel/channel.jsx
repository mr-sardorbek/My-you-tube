import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ApiService } from '../service/api.service'
import {ChannelCard, Videos }from '../'


const Channel = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail.items[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet  `)
        setVideos(dataVideo?.items)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
    //eslint-disable-next-line
  }, [id])

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <Box
          width={'90%'}
          mx={'auto'}
          mt={'10px'}
          height={'280px'}
          sx={{
            zIndex: 10,
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            objectFit: 'cover',
            borderRadius: '30px',
          }}
        />
        <ChannelCard video={channelDetail} marginTop={'-120px'}/>
      </Box>
      <Container maxWidth={'90%'}>
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Channel
