"use client";

// Hooks
import { RefObject, useRef } from "react";

// Modules
import { useInView } from 'framer-motion';

export const useSectionInView = (): { ref: RefObject<HTMLDivElement | null>, isSectionInViewPort: Boolean } => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isSectionInViewPort = useInView(ref, { once: true, margin: '-100px' });

    return { ref, isSectionInViewPort };
}