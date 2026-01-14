# SarikTube - YouTube Video Explorer

SarikTube is a React-based web application that allows users to explore and watch YouTube videos dynamically. The application integrates with the YouTube Data API (via RapidAPI) to fetch video content, display video details, and suggest related videos.

---

## Features

- **Video Details**: View detailed information about each video, including title, description, view count, like count, comment count, and channel information.  
- **Tags and Channels**: Displays video tags and provides clickable links to the respective channel pages.  
- **Related Videos**: Suggests videos related to the one being watched, enhancing user engagement.  
- **API Integration**: Uses Axios to fetch data from YouTube v3 API via RapidAPI.  
- **Responsive Design**: Fully responsive interface that works on both desktop and mobile devices.  
- **Loader Component**: Shows a loading spinner while fetching data for smooth user experience.  
- **Reusable Components**: Modular components such as `Videos`, `VideoCard`, and `ChannelCard` make the app scalable and easy to maintain.

---

# Technologies Used

React

React Router

Axios

Material-UI (MUI)

RapidAPI (YouTube v3)

React Player

React Render HTML

---

# Project Structure

components/ – Contains reusable UI components (Videos, VideoCard, ChannelCard, Loader)

pages/ – Contains main pages like Home, Search, VideoDetail

service/api.service.js – Handles API requests and data fetching

App.jsx – Main app component and routing setup



Conclusion

SarikTube provides a clean, interactive interface for exploring YouTube content. It demonstrates proficiency in React, API integration, and state management. The modular and scalable structure ensures maintainability, and the application offers a seamless experience for browsing and watching videos.