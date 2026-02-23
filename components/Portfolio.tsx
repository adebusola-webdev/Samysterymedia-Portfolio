import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Loader2 } from "lucide-react";
import { PortfolioCategory, PortfolioItem } from "../types";
import { getDriveEmbedUrl } from "../utils/driveUtils";

// ==========================================
// PORTFOLIO DATA STRUCTURE
// ==========================================
// 1. Fashion Shoots (Direct videos)
// 2. Events (Subcategories: Weddings, Social, Corporate)
// 3. Content Creation (Direct videos + Brand Contents subcategory)

const portfolioData: PortfolioCategory[] = [
  {
    id: "Lifestyle ",
    title: "Lifestyle ",
    items: [
      // {
      //   id: "f1",
      //   title: "Zuwa",
      //   thumbnailUrl: "Images/logo.JPG",
      //   videoUrl:
      //     "https://drive.google.com/file/d/1KSJNRBTh6H5LoUf02PVxYyx-PtGjxQhz/view?usp=drive_link",
      // },
      {
        id: "f2",
        title: "Beauty shoot",
        thumbnailUrl: "Images/zima.png",
        videoUrl:
          "https://drive.google.com/file/d/1ietUCSHfrLHl2aYqj-1l9-PF1GmfSHtJ/view?usp=drive_link",
      },
      {
        id: "f4",
        title: "Yourba Bride",
        thumbnailUrl: "Images/trad.png",
        videoUrl:
          "https://drive.google.com/file/d/1G86_W4LEj_YLqDMp2N2pWWbO3M_Ue2hF/view?usp=drive_link",
      },
      {
        id: "f3",
        title: "Reception Looks",
        thumbnailUrl: "Images/zimatwo.png",
        videoUrl:
          "https://drive.google.com/file/d/1oxJ2XrCUBQNREs_e1V7Ds3tNcqJOCBP9/view?usp=drive_link",
      },

      // {
      //   id: "f5",
      //   title: "Eniola",
      //   thumbnailUrl:
      //     "https://images.unsplash.com/photo-1529139574466-a302d2d3f524?q=80&w=2070&auto=format&fit=crop",
      //   videoUrl:
      //     "https://drive.google.com/file/d/1KN97imoN3rG3hF0iIIBnCsbc2W2xtt71/view?usp=drive_link",
      // },
      {
        id: "f6",
        title: "Bridgerton Remade",
        thumbnailUrl: "Images/bridgerton.png",
        videoUrl:
          "https://drive.google.com/file/d/1ULNqzs10wY4g_4ESC4AcTOCcZfMz1JdD/view?usp=drive_link",
      },
      // {
      //   id: "f7",
      //   title: "Bolat",
      //   thumbnailUrl:
      //     "https://images.unsplash.com/photo-1617251137884-f135ecc11127?q=80&w=2070&auto=format&fit=crop",
      //   videoUrl:
      //     "https://drive.google.com/file/d/1FnDYZCrld1ChXA5nSQayZX6x8RaPEIK4/view?usp=drive_link",
      // },
    ],
  },
  {
    id: "events",
    title: "Events",
    subcategories: [
      {
        id: "weddings",
        title: "Weddings",
        items: [
          {
            id: "w1",
            title: "Beautiful Bride",
            thumbnailUrl: "Images/wedding.png",
            videoUrl:
              "https://drive.google.com/file/d/1zmiKcfPYC5NzbcFCe9wB0VmbijltDX7D/view?usp=drive_link",
          },
          // {
          //   id: "w2",
          //   title: "Success 2",
          //   thumbnailUrl: "Images/",
          //   videoUrl:
          //     "https://drive.google.com/file/d/1pNQIQmQ78EMH_rtYX-u-ny2j0PcXLXt3/view?usp=drive_link",
          // },
          {
            id: "w3",
            title: "Court wedding",
            thumbnailUrl: "Images/couple.png",
            videoUrl:
              "https://drive.google.com/file/d/1S5PeGUv32m5eaMBRn7_VAw5eFr66QUjt/view?usp=drive_link",
          },
        ],
      },
      {
        id: "social",
        title: "Social Events",
        items: [
          {
            id: "s1",
            title: "Party With Oloriebi",
            thumbnailUrl: "Images/oloriebi.png",
            videoUrl:
              "https://drive.google.com/file/d/12gpCbJ0iIm7iz4BE7kEA8u3FZt7HkqAi/view?usp=drive_link",
          },
          {
            id: "s2",
            title: "Tennie 20",
            thumbnailUrl: "Images/tennie.png",
            videoUrl:
              "https://drive.google.com/file/d/1pMFu1aihx4HHuAz8Crw70lqLoQ1N5Dyl/view?usp=drive_link",
          },
        ],
      },
      {
        id: "corporate",
        title: "Corporate Events",
        items: [
          {
            id: "c1",
            title: "EAF4",
            thumbnailUrl: "Images/foundation.png",
            videoUrl:
              "https://drive.google.com/file/d/15xUetF91Dx0HLCp8XC9UUG3vGWqsJRGG/view?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    // Items directly under Content Creation
    items: [
      {
        id: "cc1",
        title: "Marriage Proposal",
        thumbnailUrl: "Images/proposal.png",
        videoUrl:
          "https://drive.google.com/file/d/1UjD7j5-kfM7pPwaFtnTGJoEpqeJYxVua/view?usp=drive_link",
      },
      {
        id: "cc2",
        title: "Church Program",
        thumbnailUrl: "Images/church.png",
        videoUrl:
          "https://drive.google.com/file/d/1uYVhw3OjaBwMXEFL1Onx5D8bwxPFowhK/view?usp=drive_link",
      },
      {
        id: "cc3",
        title: "Bridesmaid",
        thumbnailUrl: "Images/sarah.png",
        videoUrl:
          "https://drive.google.com/file/d/1BDIpDu2BgvFuU1QMqUhYBfK7-UopuTlZ/view?usp=drive_link",
      },
      {
        id: "cc4",
        title: "Wedding Guest",
        thumbnailUrl: "Images/black.png",
        videoUrl:
          "https://drive.google.com/file/d/1mAbpLKCWVdfYW6pKZUHrKwcSh_Nhiu3v/view?usp=drive_link",
      },
    ],
    subcategories: [
      {
        id: "brand",
        title: "Brand Contents",
        items: [
          {
            id: "b1",
            title: "Locksmith Auto",
            thumbnailUrl: "Images/locksmith.png",
            videoUrl:
              "https://drive.google.com/file/d/1sE7SNwQXtd2foTiGnn0U2tE19B0D1dyn/view?usp=drive_link",
          },
        ],
      },
    ],
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    portfolioData[0].id
  );
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  // Reset subcategory when main category changes
  useEffect(() => {
    const category = portfolioData.find((c) => c.id === activeCategory);
    if (category) {
      // If the category has subcategories, select the first one by default
      if (category.subcategories && category.subcategories.length > 0) {
        // Special case for Content Creation which has both items and subcategories
        // We might want a "General" or "All" tab, but let's stick to the structure:
        // If it has direct items, maybe we treat "General" as a pseudo-subcategory?
        // Let's handle this logic in the render to keep state clean.
        // For now, just set to null, and we'll handle "default view" in the UI.
        setActiveSubCategory(category.subcategories[0].id);
      } else {
        setActiveSubCategory(null);
      }
    }
  }, [activeCategory]);

  const currentCategory = portfolioData.find((c) => c.id === activeCategory);

  // Helper to get items to display based on current state
  const getDisplayItems = () => {
    if (!currentCategory) return [];

    // Case 1: Content Creation (Has both direct items and subcategories)
    if (currentCategory.id === "content-creation") {
      // We need a way to switch between "General" (direct items) and "Brand Contents" (subcategory)
      // We'll handle this with a custom sub-nav in the UI.
      if (activeSubCategory === "general") {
        return currentCategory.items || [];
      }
      const sub = currentCategory.subcategories?.find(
        (s) => s.id === activeSubCategory
      );
      return sub ? sub.items : [];
    }

    // Case 2: Events (Has only subcategories)
    if (
      currentCategory.subcategories &&
      currentCategory.subcategories.length > 0
    ) {
      const sub = currentCategory.subcategories.find(
        (s) => s.id === activeSubCategory
      );
      return sub ? sub.items : [];
    }

    // Case 3: Fashion Shoots (Has only direct items)
    return currentCategory.items || [];
  };

  const displayItems = getDisplayItems();

  return (
    <section
      id="portfolio"
      className="py-32 bg-brand-light dark:bg-brand-black relative overflow-hidden min-h-screen transition-colors duration-300 scroll-mt-24"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-navy dark:text-white mb-4 tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Explore our diverse portfolio across fashion, events, and creative
            content.
          </p>
        </div>

        {/* Level 1 Navigation: Main Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {portfolioData.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                // Special handling for Content Creation to default to 'general' if clicked
                if (category.id === "content-creation") {
                  setActiveSubCategory("general");
                }
              }}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/25"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-brand-navy dark:hover:text-white border border-gray-200 dark:border-gray-800"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Level 2 Navigation: Subcategories (if applicable) */}
        <div className="mb-12 min-h-[3rem]">
          {/* Events Sub-nav */}
          {activeCategory === "events" && currentCategory?.subcategories && (
            <div className="flex flex-wrap justify-center gap-3">
              {currentCategory.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubCategory(sub.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeSubCategory === sub.id
                      ? "bg-brand-navy dark:bg-white text-white dark:text-black font-bold"
                      : "bg-transparent text-gray-500 hover:text-brand-navy dark:hover:text-white"
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}

          {/* Content Creation Sub-nav */}
          {activeCategory === "content-creation" && (
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveSubCategory("general")}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  activeSubCategory === "general"
                    ? "bg-brand-navy dark:bg-white text-white dark:text-black font-bold"
                    : "bg-transparent text-gray-500 hover:text-brand-navy dark:hover:text-white"
                }`}
              >
                General Content
              </button>
              {currentCategory?.subcategories?.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubCategory(sub.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeSubCategory === sub.id
                      ? "bg-brand-navy dark:bg-white text-white dark:text-black font-bold"
                      : "bg-transparent text-gray-500 hover:text-brand-navy dark:hover:text-white"
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid Display */}
        <motion.div
          key={activeCategory + (activeSubCategory || "")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {displayItems.length > 0 ? (
            displayItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] group relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-800/50 hover:border-brand-accent/50 transition-colors"
                onClick={() => {
                  setLoading(true);
                  setSelectedVideo(item);
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-all"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-accent/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300 relative z-10 group-hover:scale-110">
                      <Play
                        fill="white"
                        className="text-white ml-1"
                        size={28}
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p>No videos available in this category yet.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Immersive Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-start pointer-events-none">
                <div className="pointer-events-auto">
                  <h3 className="text-white font-bold text-lg shadow-black drop-shadow-md">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  className="pointer-events-auto text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="w-full h-full relative bg-gray-900">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2
                        className="animate-spin text-brand-accent"
                        size={48}
                      />
                      <p className="text-sm text-gray-400 font-light tracking-wide">
                        Loading Experience...
                      </p>
                    </div>
                  </div>
                )}
                <iframe
                  src={getDriveEmbedUrl(selectedVideo.videoUrl)}
                  className="w-full h-full relative z-10"
                  allow="autoplay; fullscreen"
                  onLoad={() => setLoading(false)}
                  title={selectedVideo.title}
                ></iframe>
              </div>
            </motion.div>

            <div className="absolute bottom-8 text-white/30 text-sm font-light tracking-widest uppercase pointer-events-none">
              Click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
