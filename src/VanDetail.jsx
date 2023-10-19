import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const param = useParams()
    const [vanDetail, setVanDetail] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(response => response.json())
            .then(data => setVanDetail(data.vans))
    }, [param.id])

    return (
        <div className="van-detail-container">
            {vanDetail ? (
                <div className="van-detail">
                    <img alt={vanDetail.name} src={vanDetail.imageUrl} />
                    <i className={`van-type ${vanDetail.type} selected`}>
                        {vanDetail.type}
                    </i>
                    <h2>{vanDetail.name}</h2>
                    <p className="van-price"><span>${vanDetail.price}</span>/day</p>
                    <p>{vanDetail.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}