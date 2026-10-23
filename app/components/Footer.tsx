import Container from "./Container";

export default async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container>
        <div className="flex h-20 items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <p>&copy; {currentYear} David Villagomez</p>
          <p>Hecho con Next.js y Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
