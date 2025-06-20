import { serviceIcon, healthicons, educationIcon } from "@/public/img";
export type serviceDataType = { icon: string; header: string; content: string };
export const serviceData: serviceDataType[] = [
  {
    icon: serviceIcon,
    header: "Pr Services",
    content: "Share your message through the most effective media outlets.",
  },
  {
    icon: healthicons,
    header: "Consultation",
    content:
      "Personalized brand and media consulting for both individuals and businesses",
  },
  {
    icon: educationIcon,
    header: "Training",
    content:
      "Advance your journalism journey with guidance from industry professionals.",
  },
];
