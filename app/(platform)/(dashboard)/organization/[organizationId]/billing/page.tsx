import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";

import { SubscriptionButton } from "./_components/subscription-button";

import { Info } from "../_components/info";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
