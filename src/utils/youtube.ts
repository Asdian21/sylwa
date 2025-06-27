// utils/youtube.ts
export function extractYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export async function fetchYouTubeVideoData(videoUrl: string, apiKey: string) {
  apiKey = "AIzaSyDOWaO1cEwWYNzW0kFav7n3Tk1ZLpeQevE";
  const videoId = extractYouTubeVideoId(videoUrl);
  if (!videoId) return null;

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  if (data.items && data.items.length > 0) {
    const snippet = data.items[0].snippet;
    return {
      title: snippet.title,
      thumbnail: snippet.thumbnails.high.url,
    };
  }

  return null;
}
