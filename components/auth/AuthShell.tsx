import { Header } from "@/components/Header";

export function AuthShell({
  step,
  children,
}: {
  step?: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-blush">
      <Header step={step} />
      <main>{children}</main>
    </div>
  );
}
