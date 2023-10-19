import { IBaseCard } from "../../types/base";
import "./style.scss";
import { Link } from "react-router-dom";
// import Pagination from "../Pagination";
import { useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { useQueryContext } from "../../hooks/useQueryContext";
import Loading from "../Loading";
import { Empty, Pagination } from "antd";

const Card = ({ data, loading }: IBaseCard) => {
  const dataContext = useQueryContext();

  const dispatch = useDispatch();

  const handlePageChange = (page: number) => {
    console.log("page:",page);
    
    dispatch({
      type: "search",
      data: dataContext?.products,
      currentPage: page,
    });
  };
console.log("data?.summary?.count:",data?.summary?.count);
console.log("datdataContext?.currentPage",dataContext?.currentPage);

  return (
    <div className="container-list">
      <div className="list">
        {loading ? (
          <Loading />
        ) : (
          <>
            {data?.products?.length == 0 ? (
              <Empty />
            ) : (
              <>
                {data?.products?.map((item: any, i: number) => (
                  <div className="card" key={i}>
                    <img
                      src="https://minimal-kit-react.vercel.app/assets/images/covers/cover_1.jpg"
                      alt=""
                      className="card__image"
                      loading="lazy"
                    />

                    <Link
                      to={`/movie-detail/${item?.id}`}
                      className="card__link"
                    >
                      <span style={{ opacity: 1 }}>{item?.name}</span>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
        {/* <Pagination
          totalItems={data?.summary?.count}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        /> */}

<Pagination current={dataContext?.currentPage} total={data?.summary?.count} pageSize={10} onChange={handlePageChange}/>
    
    </div>
  );
};
export default Card;
