export interface CrmDeliveryFields {
  event_id?: string | null;
  crm_status?: "pending" | "delivered" | "failed" | null;
  crm_error?: string | null;
  crm_delivered_at?: string | null;
}

export function CrmDeliveryDetails({ enquiry }: { enquiry: CrmDeliveryFields }) {
  return (
    <div className="my-3 rounded-lg border border-gray-200 p-3 text-sm dark:border-slate-600">
      <p className="font-semibold">CRM: {enquiry.crm_status || "Not queued (legacy enquiry)"}</p>
      {enquiry.event_id && <p className="break-all">Event ID: {enquiry.event_id}</p>}
      {enquiry.crm_error && <p className="text-red-600">{enquiry.crm_error}</p>}
      {enquiry.crm_delivered_at && (
        <p>Delivered: {new Date(enquiry.crm_delivered_at).toLocaleString()}</p>
      )}
    </div>
  );
}
