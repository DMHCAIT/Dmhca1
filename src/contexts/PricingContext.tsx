import { createContext, useContext, type ReactNode } from "react";
import type { CourseCurrency } from "@/lib/course-pricing";

const PricingContext = createContext<CourseCurrency | null>(null);

export function PricingProvider({
  currency,
  children,
}: {
  currency: CourseCurrency | null;
  children: ReactNode;
}) {
  return <PricingContext.Provider value={currency}>{children}</PricingContext.Provider>;
}

export function usePricingCurrency() {
  return useContext(PricingContext);
}
