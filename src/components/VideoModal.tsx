import React, { useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  const isMP4 = videoUrl.includes('.mp4') || videoUrl.includes('.webm') || videoUrl.includes('.ogg');
  const isYouTube = videoUrl.includes('youtube.com/embed/');
  const isVimeo = videoUrl.includes('player.vimeo.com/video/');

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle right-click to disable "Save video as..."
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {isMP4 && (
            <>
              {/* Video Element without Controls */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-contain bg-black rounded-lg"
                autoPlay
                loop
                preload="metadata"
                onContextMenu={handleContextMenu}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          )}

          {/* YouTube or Vimeo iframe */}
          {(isYouTube || isVimeo) && (
            <iframe
              src={`${videoUrl}?autoplay=1&loop=1`}
              className="absolute inset-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onContextMenu={handleContextMenu}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;