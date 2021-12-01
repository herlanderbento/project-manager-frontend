import { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AdminLayout } from "../AdminLayout";

interface IAppLayout {
  children: ReactNode;
}

export function AppLayout({ children }: IAppLayout) {
  const { user } = useAuth();
  return <>{user ? <AdminLayout>{children}</AdminLayout> : <>{children}</>}</>;
}
