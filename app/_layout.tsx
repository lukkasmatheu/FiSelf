import { router, Slot } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    router.push("/(_public)");
  }, []);

  return <Slot />;
}
