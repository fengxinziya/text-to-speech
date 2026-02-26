export async function onRequest(context) {
  const { request } = context;
  
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  const groupId = "1870939861280624929";
  const apiKey = "sk-api-2jWlpsYZjs9hEEd8aKDLszBE1ps0qHHMx-XsOFkNDisZE2mM_hLEC6JLbdfBIBo30tf9nhzhBrHCZXBsFFskkrMFXzMACyitVe9Xq1EIZnNl845S9fKgCJ0";
  const url = `https://api.minimax.io/v1/t2a_v2?GroupId=${groupId}`;

  try {
    const body = await request.json();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
