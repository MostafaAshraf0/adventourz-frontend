import { Skeleton } from "../ui/skeleton";

const BlogCardLoading = () => {
  return (
    <Skeleton className="h-full rounded-3xl bg-white p-4 hover:scale-105 hover:bg-white/80">
      <h1 className="mt-4 text-2xl ">
        <Skeleton className="h-8 w-full bg-slate-900/20" />
      </h1>

      <p className="mt-2 line-clamp-4 text-sm text-gray-400 lg:mt-4 lg:text-base">
        <Skeleton className="h-4 w-full bg-slate-900/20" />
      </p>

      <div className="mt-10 flex w-full flex-row justify-between pt-10">
        <p className="text-sm text-gray-400">
          <Skeleton className="h-4 w-1/4 bg-slate-900/20" />
        </p>

        <div className="flex flex-row items-center text-sm font-light text-primary hover:underline">
          <Skeleton className="h-4 w-12 bg-slate-900/20" />
        </div>
      </div>
    </Skeleton>
  );
};

export default BlogCardLoading;
