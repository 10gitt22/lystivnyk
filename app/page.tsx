import { Button } from '@/ui/button';

export default function Home() {
  return (
    <main className="dark bg-background text-foreground flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-[6rem]">Lystivnyk</h1>
      <Button>Login</Button>
    </main>
  );
}
