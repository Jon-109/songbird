"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type CarouselPhoto = { src: string; alt: string; objectPosition?: string };

const AUTOPLAY_MS = 3600;

export function PhotoCarousel({ photos }: { photos: CarouselPhoto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const interactingRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [perView, setPerView] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);

  const getMetrics = useCallback(() => {
    const track = trackRef.current;
    const slide = track?.children[0] as HTMLElement | undefined;
    if (!track || !slide) return { stepSize: 0, visible: 3, maxScroll: 0 };
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const stepSize = slide.getBoundingClientRect().width + gap;
    const visible = stepSize > 0 ? Math.max(1, Math.round((track.clientWidth + gap) / stepSize)) : 3;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    return { stepSize, visible, maxScroll };
  }, []);

  useEffect(() => {
    const sync = () => {
      const { visible } = getMetrics();
      setPerView(visible);
    };
    sync();
    window.addEventListener("resize", sync, { passive: true });
    return () => window.removeEventListener("resize", sync);
  }, [getMetrics]);

  const pageCount = Math.max(1, Math.ceil(photos.length / perView));

  const scrollToPage = useCallback(
    (page: number) => {
      const track = trackRef.current;
      if (!track) return;
      const { stepSize, visible, maxScroll } = getMetrics();
      if (stepSize <= 0) return;
      const totalPages = Math.max(1, Math.ceil(photos.length / visible));
      const clamped = ((page % totalPages) + totalPages) % totalPages;
      const targetLeft = clamped === totalPages - 1 ? maxScroll : Math.min(clamped * visible * stepSize, maxScroll);
      track.scrollTo({ left: targetLeft, behavior: "smooth" });
      setActivePage(clamped);
    },
    [getMetrics, photos.length],
  );

  const stepPage = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const { stepSize, visible, maxScroll } = getMetrics();
      if (stepSize <= 0 || maxScroll <= 0) return;
      const pageWidth = visible * stepSize;
      const current = pageWidth > 0 ? Math.round(track.scrollLeft / pageWidth) : 0;
      const totalPages = Math.max(1, Math.ceil(photos.length / visible));
      const next = (current + direction + totalPages) % totalPages;
      scrollToPage(next);
    },
    [getMetrics, photos.length, scrollToPage],
  );

  useEffect(() => {
    if (photos.length <= perView || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (interactingRef.current || document.hidden) return;
      stepPage(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [photos.length, perView, paused, stepPage]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const holdInteraction = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    interactingRef.current = true;
    resumeTimer.current = setTimeout(() => {
      interactingRef.current = false;
    }, 5000);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { stepSize, visible, maxScroll } = getMetrics();
    if (stepSize <= 0) return;
    const totalPages = Math.max(1, Math.ceil(photos.length / visible));
    if (maxScroll > 0 && track.scrollLeft >= maxScroll - 12) {
      setActivePage(totalPages - 1);
      return;
    }
    const pageWidth = visible * stepSize;
    const page = pageWidth > 0 ? Math.round(track.scrollLeft / pageWidth) : 0;
    setActivePage(Math.min(Math.max(0, page), totalPages - 1));
  };

  const arrowButton =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-blue-900 hover:bg-blue-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

  return (
    <div onPointerDown={holdInteraction} onTouchStart={holdInteraction}>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
      >
        {photos.map((photo, idx) => (
          <div
            key={photo.src}
            className="group relative aspect-[4/3] w-full shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={idx < 3}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show photo set ${index + 1} of ${pageCount}`}
              aria-current={index === activePage}
              onClick={() => {
                holdInteraction();
                scrollToPage(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                index === activePage
                  ? "w-8 bg-blue-900"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
          <span className="ml-2 text-xs font-semibold tabular-nums text-slate-500">
            {Math.min(activePage + 1, pageCount)} / {pageCount}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={paused ? "Resume auto-rotation" : "Pause auto-rotation"}
            onClick={() => setPaused((v) => !v)}
            className="flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 text-xs font-bold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {paused ? (
              <>
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Play</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
                <span>Pause</span>
              </>
            )}
          </button>
          <button
            type="button"
            aria-label="Previous photos"
            onClick={() => {
              holdInteraction();
              stepPage(-1);
            }}
            className={arrowButton}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photos"
            onClick={() => {
              holdInteraction();
              stepPage(1);
            }}
            className={arrowButton}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
