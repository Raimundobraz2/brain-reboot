import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Isto está a manter você preso na depressão — Depressão Nunca Mais" },
      { name: "description", content: "Descubra os hábitos diários que alimentam a depressão silenciosamente — e o método científico para reverter o ciclo e recuperar o seu bem-estar." },
      { property: "og:title", content: "Isto está a manter você preso na depressão — Depressão Nunca Mais" },
      { property: "og:description", content: "Descubra os hábitos diários que alimentam a depressão silenciosamente — e o método científico para reverter o ciclo e recuperar o seu bem-estar." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Isto está a manter você preso na depressão — Depressão Nunca Mais" },
      { name: "twitter:description", content: "Descubra os hábitos diários que alimentam a depressão silenciosamente — e o método científico para reverter o ciclo e recuperar o seu bem-estar." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2cdbd8fc-2bf4-4c7f-8460-9e12c51daf82/id-preview-0989b572--fec476c8-c2b4-48a5-bd6c-1d1f5b69c11f.lovable.app-1777933208202.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2cdbd8fc-2bf4-4c7f-8460-9e12c51daf82/id-preview-0989b572--fec476c8-c2b4-48a5-bd6c-1d1f5b69c11f.lovable.app-1777933208202.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Public+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
