import React, { useEffect, useState } from 'react';
import axios from "axios";
const ComA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(response.data.moves.length);
            setName(response.data.name);
            setMoves(response.data.moves.length);
        }
        fetchData();
    });
    return (
        <>
            <h1 className="heading"> Pokemon </h1>
            <br />
            <div className="card_div">
                <h2> Hi I am <span style={{ color: "red" }}> {name} </span></h2>
                <h2> I've <span style={{ color: "red" }}>{moves} </span> move</h2>
                <select value={num}
                    onChange={(event) => {
                        setNum(event.target.value);
                    }}>
                    <option value='25'>25</option>
                    <option value='1'> 1 </option>
                    <option value='2'> 2 </option>
                    <option value='3'> 3 </option>
                    <option value='4'> 4 </option>
                </select>
            </div>
        </>
    );
}
export default ComA;