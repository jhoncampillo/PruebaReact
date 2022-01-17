export const getFactFromCatApi = async () => {
  const url = `https://catfact.ninja/fact`;
  const resp = await fetch(url);
  const { fact } = await resp.json();
  return fact;
};

export const getCatsFromApi = (numberOfTasks) => {
  return Promise.all(
    Array.from({ length: numberOfTasks }).map((call) => getFactFromCatApi())
  );
};
