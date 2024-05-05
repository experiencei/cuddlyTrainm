import { serverClient } from "@/lib/supabase-server";
import { TRestaurant } from "@/types/types";
import type { Metadata, ResolvingMetadata } from "next";

// export const metadata: Metadata = {
//   title: "Store - Jadedval",
//   description:
//     "Welcome to Jade D’Val  E-commerce platform where you can sell your products. Please setup your store.",
// };
type Props = {
  params: { restaurant: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const name = params.restaurant;

  // fetch data
  const restaurant: TRestaurant | any = await serverClient
    .from("Restaurant_List")
    .select("&")
    .eq("name", name)
    // .single();

  const previousImages = (await parent).openGraph?.images || [];
console.log(restaurant,restaurant)
  if (restaurant) {
    console.log(restaurant);
    const name =
      restaurant.name.charAt(0).toUpperCase() + restaurant.name.slice(1);
    return {
      title: ` ${name}`,
      description: name + restaurant.about,
      keywords: `${name} , ${name} ,${name} ,  peony`,
      openGraph: {
        images: ["/some-specific-page-image.jpg", ...previousImages],
      },
    };
  } else {
    return { title: "Not found", description: "Page not found" };
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" ">{children}</div>;
}
