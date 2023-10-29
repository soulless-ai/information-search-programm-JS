export async function getUsers(query = "") {
  try {
    let url = "https://server-q7xt.onrender.com:3000";
    
    if (query) url += `?term=${query}`;
    
    const response = await fetch(url);
    
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}