import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box} from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => {
  return <BrowserRouter>
    <Box sx={{
        height: 100,
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element= {<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      </Routes>
    </Box>
  </BrowserRouter>
}

export default App;
