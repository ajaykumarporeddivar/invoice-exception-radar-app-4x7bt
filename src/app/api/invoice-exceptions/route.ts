export async function GET() {
  return new Response(JSON.stringify(invoiceExceptions), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST({ request }) {
  const { invoiceNumber, clientName, exceptionType, dollarImpact } =
    await request.json();

  const newInvoiceException = {
    id: invoiceExceptions.length + 1,
    invoiceNumber,
    clientName,
    exceptionType,
    dollarImpact,
    approvalStatus: 'Pending',
    nextAction: 'Request Approval',
  };

  invoiceExceptions.push(newInvoiceException);

  return new Response(JSON.stringify(newInvoiceException), {
    headers: { 'Content-Type': 'application/json' },
  });
}