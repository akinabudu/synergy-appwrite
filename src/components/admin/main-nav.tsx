import Link from "next/link";

import { cn } from "@/lib/utils";
import { AdminTopBarMenu } from "@/lib/data/menu";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {AdminTopBarMenu.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
