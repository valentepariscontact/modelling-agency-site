import Image from "next/image";
import Link from "next/link";
import { ModelProfile } from "@/lib/models";

type ModelCardProps = {
  model: ModelProfile;
};

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <article className="group space-y-4">
      <Link href={`/models/${model.slug}`} className="block space-y-4">
        <div className="relative aspect-[3/4] overflow-hidden border border-black bg-zinc-100">
          <Image
            src={model.portrait}
            alt={`${model.name} portrait`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <h2 className="font-serif text-xl leading-none uppercase tracking-[0.14em]">
          {model.name}
        </h2>
      </Link>
    </article>
  );
}
