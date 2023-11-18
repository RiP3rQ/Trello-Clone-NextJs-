import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import { Info } from "../_components/info";

import { ActivityList } from "./_components/activity-list";
import { checkSubscription } from "@/lib/subscription";

const ActivityPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
