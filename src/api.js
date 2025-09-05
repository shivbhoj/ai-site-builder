export async function generateSiteCode(prompt) {
  const res = await fetch("/api/generateSiteCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) throw new Error("AI code generation failed");
  const data = await res.json();
  return data.code;
}