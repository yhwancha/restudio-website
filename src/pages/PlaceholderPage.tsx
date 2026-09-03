interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="bg-white px-5 pb-20 pt-14 md:px-12 md:pt-20 xl:px-[120px]">
      <section className="mx-auto flex min-h-[calc(100dvh-136px)] max-w-site items-center">
        <div className="max-w-[760px]">
          <p className="text-sm font-semibold text-primary-600">RESTUDIO</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-primary-900 md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg leading-8 text-primary-700 md:text-xl">
            {description}
          </p>
        </div>
      </section>
    </main>
  );
}
