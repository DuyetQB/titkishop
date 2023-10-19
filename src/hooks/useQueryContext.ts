import { useContext } from "react";
import { StoreContext } from "../app/Context";

export function useQueryContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useQuery must be used within a TaskProvider');
  }
  return context.value;
}
