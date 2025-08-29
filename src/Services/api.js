const API_URL = "https://vip0jliz09.execute-api.ap-south-1.amazonaws.com/default/MyfirstLambda";

export async function testLambda() {
  const res = await fetch(API_URL);
  return res.json();
}

