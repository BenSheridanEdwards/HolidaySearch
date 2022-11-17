import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  children: ReactNode;
  coverImageUrl: string;
  imageDescription: string;
  linkUrl?: string;
}

export function Card({
  children,
  coverImageUrl,
  imageDescription,
  linkUrl,
}: CardProps) {
  if (linkUrl) {
    return (
      <Link href={linkUrl} className="group no-underline">
        <article className="h-full w-full max-w-[326px] rounded-2xl bg-light text-dark duration-200 ease-out group-hover:translate-y-[-8px]">
          <div className="relative min-h-[200px] w-full pb-[56.25%]">
            <Image
              className="absolute left-0 bottom-0 right-0 top-0 max-h-[200px] w-full rounded-t-2xl"
              src={coverImageUrl}
              alt={imageDescription}
              fill
            />
          </div>
          <div className="py-3 px-4">{children}</div>
        </article>
      </Link>
    );
  }

  return (
    <article className="h-full w-full max-w-[326px] rounded-2xl bg-light text-dark">
      <div className="relative min-h-[200px] w-full pb-[56.25%]">
        <Image
          className="absolute left-0 bottom-0 right-0 top-0 max-h-[200px] w-full rounded-t-2xl"
          src={coverImageUrl}
          fill
          alt={imageDescription}
        />
      </div>
      <div className="py-3 px-4">{children}</div>
    </article>
  );
}

Card.defaultProps = {
  linkUrl: null,
};
