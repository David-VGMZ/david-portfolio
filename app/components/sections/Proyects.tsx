import Image from "next/image";
import Section from "../Section";

const proyectos = [
  {
    titulo: "Proseinet PWA eCommerce",
    descripcion:
      "Diseño, desarrollo e implementación completa de una Aplicación Web Progresiva (PWA) enfocada en la optimización de los módulos de inventario, compras y ventas.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "NodeJS",
      "Firebase",
      "Bootstrap",
      "API Rest",
      "UI/UX",
    ],
    repo: "#",
    demo: "https://app.proseinet.mx/",
    imagen: "/proyects/proseinet-tienda-pwa.jpg",
  },
  {
    titulo: "Proseinet Sistema de Gestión de Almacén",
    descripcion:
      "Desarrollo de sistema ERP (Planificación de Recursos Empresariales) para reportes de inventario y balances consolidados en formato PDF mediante scripts avanzados integrados en el ecosistema del sistema de gestión.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "NodeJS",
      "Firebase",
      "Bootstrap",
      "API Rest",
      "UI/UX",
    ],
    repo: "#",
    demo: "#",
    imagen: "/proyects/almacen-prsnt.jpg",
  },
  {
    titulo: "Proseinet Sistema de Gestión de Vacaciones",
    descripcion:
      "Desarrollo de sistema de vacaciones optimizado, para que los empleados pueda realizar peticiones de días de vacaciones, acorde a sus antigüedades y dias correspondientes ante la Ley Federal del Trabajo, con automatización de los dias correspondientes de los empleados acorde a su antigüedad laboral.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "NodeJS",
      "Firebase",
      "Bootstrap",
      "API Rest",
      "UI/UX",
    ],
    repo: "#",
    demo: "#",
    imagen: "/proyects/vacaciones-prsnt.jpg",
  },
];

export default function Proyects() {
  return (
    <Section id="proyectos" titulo="Proyectos">
      <div className="grid gap-6 sm:grid-cols-2">
        {proyectos.map((proyecto) => (
          <article
            key={proyecto.titulo}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 transition duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/60 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:shadow-black/40"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              {proyecto.imagen ? (
                <Image
                  src={proyecto.imagen}
                  alt={`Captura del proyecto ${proyecto.titulo}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-zinc-200 to-zinc-100 dark:from-zinc-700 dark:to-zinc-800" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-semibold transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                {proyecto.titulo}
              </h3>
              <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                {proyecto.descripcion}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {proyecto.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {(proyecto.repo !== "#" || proyecto.demo !== "#") && (
                <div className="mt-6 flex gap-4 text-sm font-medium">
                  {proyecto.repo !== "#" && (
                    <a
                      href={proyecto.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Código
                    </a>
                  )}
                  {proyecto.demo !== "#" && (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
