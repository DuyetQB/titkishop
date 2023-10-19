import { useContext } from "react";
import { StoreContext } from "../app/Context";

export function useDispatch() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useDispatch must be used within a TaskProvider');
  }
  return context.dispatch;
}
