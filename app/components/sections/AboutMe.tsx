import Section from "../Section";

export default function AboutMe() {
  return (
    <Section id="about-me" titulo="Sobre mí">
      <div className="grid gap-10 sm:grid-cols-3">
        <div className="space-y-4 text-zinc-600 sm:col-span-2 dark:text-zinc-400">
          <p>
            Estoy especializado en negocios digitales con un perfil híbrido en
            desarrollo de software, mantenimiento preventivo y correctivo de
            hardware y producción multimedia. Me comprometo mucho con mis metas
            y siempre procuro realizar mis labores con esfuerzo y dedicación.
          </p>
          <p>
            Actualmente busco proyectos en donde pueda aportar tanto en producto
            como en la calidad técnica del software.
          </p>
        </div>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-zinc-500 dark:text-zinc-400">Ubicación</dt>
            <dd className="font-medium">Morelia, Michoacán, México</dd>
          </div>
          <div>
            <dt className="text-zinc-500 dark:text-zinc-400">Enfoque</dt>
            <dd className="font-medium">Fullstack | Diseño Gráfico | UI/UX</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
