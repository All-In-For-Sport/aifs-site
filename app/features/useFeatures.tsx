"use client";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { getFeatures } from "./getFeatures";

export type FeaturesState = {
  BLOG: boolean;
};

const FeaturesContext = createContext<FeaturesState | undefined>(undefined);

export function FeaturesProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => getFeatures(), []);

  return (
    <FeaturesContext.Provider value={value}>
      {children}
    </FeaturesContext.Provider>
  );
}

export function useFeatures() {
  const value = useContext(FeaturesContext);
  if (!value)
    throw new Error("useFeatures must be called within FeaturesProvider");
  return value;
}
