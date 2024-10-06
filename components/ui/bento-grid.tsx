import { cn } from "@/lib/util";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3  gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black  bg-white border border-transparent justify-between flex flex-col ",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex items-center justify-start gap-x-6">
        {icon}
        <div className="font-sans font-semibold text-lg text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
      </div>
    </div>
  );
};
