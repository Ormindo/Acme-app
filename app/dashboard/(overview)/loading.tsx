import DashboardSkeleton from "../../ui/skeletons"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard',
  };

export default function Page() {
    return <DashboardSkeleton />
}