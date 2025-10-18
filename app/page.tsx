import Gallery from "@/components/Gallery"

export default function Home() {
  const babyPics = [
    { src: "/baby1.webp" },
    { src: "/baby2.webp" },
    { src: "/baby3.webp" },
    { src: "/baby4.webp" },
    { src: "/baby5.webp" },
    { src: "/baby6.webp" },
    { src: "/baby7.webp" },
    { src: "/baby8.webp" },
    { src: "/baby9.webp" },
    { src: "/baby10.webp" },
    { src: "/baby11.webp" },
    { src: "/baby12.webp" },
    { src: "/baby13.webp" },
    { src: "/baby14.webp" },
    { src: "/baby15.webp" },
    { src: "/baby16.webp" },
    { src: "/baby17.webp" },
    { src: "/baby18.webp" },
    { src: "/baby19.webp" },
    { src: "/baby20.webp" },
    { src: "/baby21.webp" },
    { src: "/baby22.webp" },
    { src: "/baby23.webp" },
    { src: "/baby24.webp" },
    { src: "/baby25.webp" },
  ]

  return (
    <main className="min-h-screen ">
      <Gallery
        images={babyPics}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full rounded-lg overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3">
        <div className="flex flex-col gap-2">
          <h1
            className="font-[family-name:var(--font-amatic)] text-9xl md:text-9xl tracking-wide font-bold text-white"
            style={{
              WebkitTextStroke: "2px #1565c0",
              textShadow: "0 0 20px rgba(66, 165, 245, 0.5), 0 0 40px rgba(66, 165, 245, 0.3)",
            }}
          >
            Baby Cash
          </h1>
          <p
            className="font-[family-name:var(--font-amatic)] text-5xl md:text-5xl font-bold text-white"
            style={{
              WebkitTextStroke: "1px #1565c0",
              textShadow: "0 0 15px rgba(66, 165, 245, 0.4), 0 0 30px rgba(66, 165, 245, 0.2)",
            }}
          >
            Coming April 20, 2026
          </p>
        </div>
      </div>

    </main>
  )
}
