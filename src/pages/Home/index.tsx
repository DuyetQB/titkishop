import MainLayout from "../layout/MainLayout";
import "./style.scss";
import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import {
  getCategory,
  getProduct,
  getProductByCategoryName,
} from "../../apis/store";
import { useEffect, useState } from "react";
import { useQueryContext } from "../../hooks/useQueryContext";
import { Select, SelectProps } from "antd";
import { useDispatch } from "../../hooks/useDispatch";

function Home() {
  const dataContext = useQueryContext();

 
  const [dataInitial, setDataInitial] = useState<any>();
  console.log("dataContext bên home", dataContext["currentPage"]);
  console.log("dataContext products bên home", dataContext?.products);
  const { data, loading } = useFetch(
    async () => await getProduct({ page:dataContext["currentPage"]}),
    [dataContext]
  );
  const { data: dataCategory, loading: loadingCategory } = useFetch(
    async () => await getCategory(),
    []
  );
  useEffect(() => {
    if (dataContext?.products.length > 0) {
      console.log("dataconexxt", dataContext);

      setDataInitial(dataContext?.products);
      return;
    }
    setDataInitial(data);
  }, [dataContext, data]);

  const options: SelectProps["options"] = [];

  dataCategory?.categories.map((item: any) => {
    if (item.category !== "" || item.categor === null) {
      options.push({
        label: item.category,
        value: item.category,
      });
    }
  });


  const handleChange = async (value: string[]) => {
    console.log(`selected ${value}`);
    if (value !== undefined) {
      const result = await getProductByCategoryName(value);
      console.log("result handleChange:", result);
      setDataInitial(result);
      return;
    }

    setDataInitial(data);
  };

  return (
    <MainLayout>
      <div className="wrap">
        <h2 className="wrap__title">Producs</h2>
        <div className="form-select">
          <Select
            placeholder="Please select"
            onChange={handleChange}
            options={options}
            allowClear
            showSearch
          />
        </div>
        <Card data={dataInitial} loading={loading} />
      </div>
    </MainLayout>
  );
}

export default Home;
