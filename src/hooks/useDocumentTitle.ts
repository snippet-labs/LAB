"use client";

// Hooks
import { useEffect } from "react";

export const useDocumentTitle = (title: string): void => {
    useEffect(() => {
        document.title = `Lab | ${title}`;
    }, [title])
}