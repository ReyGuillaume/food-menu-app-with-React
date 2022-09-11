import {useState, useEffect} from 'react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '683da681e1msh3d65f8113abb353p1bd85bjsn3ea121f1cf3e',
		'X-RapidAPI-Host': 'burger-king-menu.p.rapidapi.com'
	}
};

const useFoodData = () => {
    const [foodData, setFoodData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const returnRandomInt = (inf, sup) => {
        const randInt = Math.random() * (sup - inf) + inf;
        return Math.floor(randInt);
    }

    useEffect(() => {
        setLoading(true);
        fetch('https://burger-king-menu.p.rapidapi.com/categories', options)
        .then(response => response.json())
        .then((data) => {
            const preparedData = [];
            data.forEach(d => {
                const {id , name , img} = d;
                const price = returnRandomInt(5,15);
                preparedData.push({
                    id,
                    name,
                    img,
                    price
                });
            });
            setFoodData(preparedData);
        })
        .finally(setLoading(false));
    },[])

    return {foodData, isLoading};

    // Suppr netx
    // const data = [{
    //     id: 100,
    //     name: "Un Truc qui a l'air bon",
    //     img: "",
    //     price: returnRandomInt(5,15)
    // }]

    //  const bool = false;

    // return {data, bool}
}

export default useFoodData;