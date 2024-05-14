import * as React from "react";
import serverClient from "@/lib/supabase-server";
import { TRestaurant } from "@/types/types";
import type { Metadata, ResolvingMetadata } from "next";
import Helmet from "react-helmet";
import { browserClient } from "@/lib/supabase-browser";
import { usePathname } from "next/navigation";

export async function generateMetadata(
  { params }: { params: { restaurant: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const name = params.restaurant.replace(/%20/g, " ").replace(/%/g, "");
  const res: TRestaurant | any = await serverClient
    .from("Restaurant_List")
    .select("*")
    .eq("name", name)
    .single();

  console.log(res);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (res.data && !res.error) {
    return {
      title: `${res.data.name}`,
      description: `${res.data.about}`,
      keywords: `${res.data.name} ,${res.data.address} , ${res.data.about}, peony`,
      openGraph: {
        images: ["/some-specific-page-image.jpg", ...previousImages],
      },
    };
  } else {
    return { title: "Not found", description: "Page not found" };
  }
}
export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: { restaurant: string };
  children: React.ReactNode;
}>) {
  return <div className=" ">{children}</div>;
}
