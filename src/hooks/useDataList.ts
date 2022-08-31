interface Data {
  path: string;
}

const useDataList = <T>(path: string, data: Array<Data & T>) => {
  const item = data.find(({ path: dataPath }) => dataPath === path);
  return item;
};

export default useDataList;
