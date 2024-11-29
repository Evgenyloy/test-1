export const useHttp = () => {
  const request = async (
    url: string,
    method = 'GET',
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await fetch(url, { method, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data.data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
