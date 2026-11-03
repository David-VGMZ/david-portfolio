import Container from "./Container";

export default async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc dark:border-zinc-800">
      <Container>
        <div className="flex h-20 items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <p>&copy; {currentYear} David Villagomez</p>
        </div>
      </Container>
    </footer>
  );
}
