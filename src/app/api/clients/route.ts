export async function GET() {
  return new Response(JSON.stringify(clients), {
    headers: { 'Content-Type': 'application/json' },
  });
}