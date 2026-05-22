import {
  Hammer,
  Leaf,
  Snowflake,
  Droplets,
  TreePine,
  Truck,
  Package,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  hammer: Hammer,
  leaf: Leaf,
  snowflake: Snowflake,
  droplets: Droplets,
  treePine: TreePine,
  truck: Truck,
  package: Package,
  sparkles: Sparkles,
};

export function getServiceIcon(name: ServiceIconName): LucideIcon {
  return iconMap[name];
}
