
import { useState } from "react" 
import { motion, AnimatePresence } from "framer-motion" 
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useScreenSize } from "@/utils/useScreenSize"

const images = [
  "/hero1.JPG",
  "/hero1.JPG",
  "/hero1.JPG",
  "/hero1.JPG",
  "/hero1.JPG",
  "/hero1.JPG",
  "/hero1.JPG",
  "/hero1.JPG",
]

export default function ImageGridCarousel() {
  const { width } = useScreenSize()
  const [currentIndex, setCurrentIndex] = useState(0)

  const isSmallScreen = width < 481
  const isMediumScreen = width >= 481 && width < 768
  const isLargeScreen = width >= 768

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }
 
  const getColumnSpan = (index: number) => {
    const row = Math.floor(index / 3) 
    const positionInRow = index % 3  

    if (row % 2 === 0) { 
      return positionInRow === 0 ? "col-span-1" : "col-span-2"
    } else {
      return positionInRow === 1 ? "col-span-2" : "col-span-1"
    }
  }

  if (isSmallScreen) {
    return (
      <section className="relative w-full h-[233px]">
        <AnimatePresence initial={false}>
          <motion.figure
            key={currentIndex}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x > 100 || velocity.x > 100) {
                prevImage()
              } else if (offset.x < -100 || velocity.x < -100) {
                nextImage()
              }
            }}
          >
            <img
              src={images[currentIndex] || "/placeholder.svg"} 
               
              className="object-cover rounded-lg w-full h-full"
            />
          </motion.figure>
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>
    )
  }

  return (
    <section className="container mx-auto px-4">
      <div className={`grid gap-4 ${isMediumScreen ? "grid-cols-4" : "grid-cols-6"}`}>
        {images.map((src, index) => (
          <figure key={index} className={`relative h-[233px] overflow-hidden ${isLargeScreen ? getColumnSpan(index) : ""}`}>
            <img
              src={src || "/placeholder.svg"} 
               
              className="object-cover rounded-lg h-full w-full"
              sizes={isMediumScreen ? "25vw" : "(max-width: 1200px) 16vw, 33vw"}
            />
          </figure>
        ))}
      </div>
    </section>
  )
}