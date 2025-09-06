"use client"
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import facilitationsData from "@/lib/facilitations.json";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function FacilitationsPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-8 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>Facilitations</h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto ${outfit.className}`}>Passing forward the lessons I have picked up along the way.</p>
        
        <div className="mt-16 grid grid-cols-1 gap-10">
          {facilitationsData.map((facilitation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-card/50 backdrop-blur max-w-4xl mx-auto">
                <div className="p-8 space-y-6">
                  <h3 className={`text-2xl font-semibold ${lexend.className}`}>
                    {facilitation.title}
                  </h3>
                  
                  <p className={`text-lg text-muted-foreground ${outfit.className}`}>
                    {facilitation.conducted}
                  </p>

                  <div className="grid gap-6">
                    {/* Main image - larger and prominent */}
                    <div className="relative w-full h-[300px] sm:h-[400px]">
                      <Image
                        src={`${facilitation["photo-dir"].replace("./public", "")}/1.jpeg`}
                        alt={`${facilitation.title} - Photo 1`}
                        fill
                        className="object-cover rounded-xl shadow-md"
                        style={{ 
                          objectPosition: index === 0 ? "center 40%" : 
                                       index === 1 ? "center 35%" :
                                       index === 2 ? "center 30%" :
                                       "center 40%"
                        }}
                        sizes="(max-width: 768px) 100vw, 768px"
                        priority={true}
                        unoptimized={index === facilitationsData.length - 1}
                      />
                    </div>
                    {/* Secondary images in a row */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      <div className="relative h-[200px] sm:h-[250px]">
                        <Image
                          src={`${facilitation["photo-dir"].replace("./public", "")}/2.jpeg`}
                          alt={`${facilitation.title} - Photo 2`}
                          fill
                          className="object-cover rounded-xl shadow-md"
                          style={{ 
                            objectPosition: index === 0 ? "center 35%" : 
                                         index === 1 ? "center 40%" :
                                         index === 2 ? "center 35%" :
                                         "center 45%"
                          }}
                          sizes="(max-width: 768px) 50vw, 384px"
                          priority={true}
                          unoptimized={index === facilitationsData.length - 1}
                        />
                      </div>
                      <div className="relative h-[200px] sm:h-[250px]">
                        <Image
                          src={`${facilitation["photo-dir"].replace("./public", "")}/3.jpeg`}
                          alt={`${facilitation.title} - Photo 3`}
                          fill
                          className="object-cover rounded-xl shadow-md"
                          style={{ 
                            objectPosition: index === 0 ? "center 35%" : 
                                         index === 1 ? "center 40%" :
                                         index === 2 ? "center 35%" :
                                         "center 45%"
                          }}
                          sizes="(max-width: 768px) 50vw, 384px"
                          priority={true}
                          unoptimized={index === facilitationsData.length - 1}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className={`text-muted-foreground leading-relaxed ${outfit.className}`}>
                      {facilitation.description}
                    </p>
                    
                    <Link
                      href={facilitation.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>View on LinkedIn</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}  