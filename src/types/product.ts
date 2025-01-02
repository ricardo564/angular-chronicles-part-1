import { UserPreview } from "@/components/UserPreview.component";

export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  description: string;
  price: number;
  category: string;
  users: UserPreview[];
}
