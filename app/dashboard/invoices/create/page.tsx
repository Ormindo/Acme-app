import Form from "@/app/ui/invoices/create-form"
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"
import { fetchCustomers } from "@/app/lib/data"

export default async function Page() {
    const custumers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { 
                        label: 'Fatura', 
                        href: '/dashboard/invoices' },
                    {
                        label: 'Criar Fatura',
                        href: '/dashboard/invoices/create',
                        active: true,
                    },
                ]}
            />
            <Form customers={custumers} />
        </main>
    );
}