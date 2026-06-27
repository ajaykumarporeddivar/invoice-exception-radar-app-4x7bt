export async function GET() {
  return new Response(JSON.stringify(exceptionTypes), {
    headers: { 'Content-Type': 'application/json' },
  });
}