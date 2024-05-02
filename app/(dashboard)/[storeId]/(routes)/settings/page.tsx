import SettingsForm from "@/components/settings-form";
import prismadb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface SettingsPageProps {
  params: {
    storeId: string
  }
}

const SettingsPage = async ({ params }: SettingsPageProps) => {

  const { userId } = auth();

  if (!userId) return redirect('/sign-in');

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    }
  });

  if (!store) redirect('/');

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm store={store} />
      </div>
    </div>
  )
}

export default SettingsPage