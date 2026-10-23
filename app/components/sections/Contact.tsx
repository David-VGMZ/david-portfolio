import Section from "../Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

export default function Contact() {
  return (
    <Section id="contact" titulo="Contacto">
      <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
        ¿Tienes un proyecto en mente o quieres que colaboremos? ¡Escríbeme!
      </p>
      <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
        <a
          href="mailto:villagomezf12@gmail.com"
          className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          <MailIcon className="h-4 w-4" />
          villagomezf12@gmail.com
        </a>
        <a
          href="https://github.com/David-VGMZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          <GitHubIcon className="h-4 w-4" />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/david-villagomez-carranza-5165b12b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
