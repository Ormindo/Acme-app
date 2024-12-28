import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';


export default async function Page(props: { params: Promise<{ id: string}> }) {
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Faturas',
                        href: '/dashboard/invoices'
                    },
                    {
                        label: 'Editar Faturas',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    )
}