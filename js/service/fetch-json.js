export async function fetchJSON(url = "/data.json") {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
