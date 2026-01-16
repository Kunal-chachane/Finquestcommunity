import { Play, Pause, Volume2, Maximize } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const videoContent = [
  {
    id: 1,
    title: "NeoBank Pro Demo",
    description: "See how our AI-powered banking platform revolutionizes personal finance management",
    thumbnail: "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1ODI3NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:45",
    category: "Product Demo",
    views: "45K",
    featured: true
  },
  {
    id: 2,
    title: "Investment Trading Tutorial",
    description: "Master advanced trading strategies with our comprehensive platform guide",
    thumbnail: "https://images.unsplash.com/photo-1720135885032-b40d518da255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwdHJhZGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1ODI3NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8:12",
    category: "Tutorial",
    views: "23K",
    featured: false
  },
  {
    id: 3,
    title: "Cryptocurrency Security",
    description: "Learn about enterprise-grade security features for digital asset protection",
    thumbnail: "https://images.unsplash.com/photo-1634386708556-f1a553527aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBmbG9vcnxlbnwxfHx8fDE3NTgyNzczMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "5:33",
    category: "Security",
    views: "67K",
    featured: false
  },
  {
    id: 4,
    title: "Fintech Startup Success Story",
    description: "Behind the scenes of building a revolutionary financial technology company",
    thumbnail: "https://images.unsplash.com/photo-1733826544831-ad71d05c8423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgyNzczMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12:45",
    category: "Company Story",
    views: "89K",
    featured: false
  }
];

export function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const featuredVideo = videoContent.find(video => video.featured);
  const otherVideos = videoContent.filter(video => !video.featured);

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Watch & Learn
            <br />
            <span className="text-pink-300">Fintech in Action</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Discover how cutting-edge financial technology is transforming the way we manage money
          </p>
        </motion.div>

        {/* Featured Video */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:shadow-xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Video Player Area */}
                <div className="relative group cursor-pointer" onClick={() => handlePlayVideo(featuredVideo.id)}>
                  <ImageWithFallback
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-pink-600 rounded-full p-4 shadow-xl backdrop-blur-sm"
                    >
                      {playingVideo === featuredVideo.id ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </motion.div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pink-600/80 text-white backdrop-blur border-white/20">
                      Featured
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur border-white/20">
                      {featuredVideo.duration}
                    </Badge>
                  </div>
                </div>

                {/* Video Details */}
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-3 bg-pink-500/20 text-pink-200 border-pink-300/30">
                    {featuredVideo.category}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{featuredVideo.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{featuredVideo.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-white/70" />
                      <span className="text-white/70">{featuredVideo.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-white/70" />
                      <span className="text-white/70">HD Quality</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
                      onClick={() => handlePlayVideo(featuredVideo.id)}
                    >
                      {playingVideo === featuredVideo.id ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pause Video
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Watch Now
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => handlePlayVideo(video.id)}
            >
              <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:shadow-xl transition-all duration-300">
                <div className="relative group">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-pink-600 rounded-full p-3 shadow-lg"
                    >
                      {playingVideo === video.id ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur text-xs">
                      {video.duration}
                    </Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-pink-500/80 text-white backdrop-blur text-xs">
                      {video.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2 text-white">{video.title}</h4>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">{video.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-xs">{video.views} views</span>
                    <Button size="sm" variant="ghost" className="text-pink-300 hover:text-pink-200 hover:bg-pink-500/20">
                      Watch
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}