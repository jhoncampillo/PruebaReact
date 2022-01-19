//LLamo a la Api de Cats
export const getFactFromCatApi = async () => {
  const url = `https://catfact.ninja/fact`;
  const resp = await fetch(url);
  //desestruturo
  const { fact } = await resp.json();
  return fact;
};
//Creo promesas del tamo del aerray
export const getCatsFromApi = (numberOfTasks) => {
  return Promise.all(
    //Creo el array iterable
    Array.from({ length: numberOfTasks }).map((call) => getFactFromCatApi())
  );
};
