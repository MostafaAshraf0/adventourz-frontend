import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailLoading = () => {
  return (
    <div className="mx-auto my-10 max-w-4xl px-4 lg:px-0">
      <article>
        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-bold leading-tight lg:text-5xl">
            <Skeleton className="h-12 w-full bg-slate-900/20" />
          </h1>
          <p className="text-lg text-gray-900">
            <Skeleton className="h-6 w-1/4 bg-slate-900/20" />
          </p>
        </header>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
            <Skeleton className="h-8 w-1/3 bg-slate-900/20" />
          </h2>
          <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
            <Skeleton className="h-6 w-full bg-slate-900/20" />
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
            <Skeleton className="h-8 w-1/3 bg-slate-900/20" />
          </h2>
          <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
            <Skeleton className="h-6 w-full bg-slate-900/20" />
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
            <Skeleton className="h-8 w-1/3 bg-slate-900/20" />
          </h2>
          <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
            <Skeleton className="h-6 w-full bg-slate-900/20" />
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
            <Skeleton className="h-8 w-1/3 bg-slate-900/20" />
          </h2>
        </section>
      </article>
    </div>
  );
};

export default BlogDetailLoading;
