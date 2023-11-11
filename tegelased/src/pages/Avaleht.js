import React, { useState } from 'react'

function Avaleht() {
    const [tegelaskuju, uuendaTegelasekuju] = useState("");


    const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred acre wood"},
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred acre wood"}
    ]

    const kuvaNimi = (tegelane) => {
        console.log(tegelane.eesnimi);
        uuendaTegelasekuju(tegelane.eesnimi);
    }

    return (
        <div>

            <div>
                {tegelased.map(tegelane =>
                <div key={tegelane.eesnimi}>
                    <div>{tegelane.eesnimi}</div>
                    <div>{tegelane.perenimi}</div>
                    <div>{tegelane.elukoht}</div>
                    <button onClick={() => kuvaNimi(tegelane)}>Kuva tegelane</button>
                </div>)}
            </div>

            {tegelaskuju !== "" && <div>Klikkisid tegelase {tegelaskuju} peal</div>}
            
            {/* <div>
                <div>Mickey</div>
                <div>Mouse</div>
                <div>Disneyland</div>
            </div>
            <div>
                <div>Minnie</div>
                <div>Mouse</div>
                <div>Disneyland</div>
            </div>
            <div>
                <div>Winnie</div>
                <div>Pooh</div>
                <div>Hundred acre wood</div>
            </div>
            <div>
                <div>Roo</div>
                <div>Kangaroo</div>
                <div>Hundred acre wood</div>
            </div>
            <div>
                <div>Scooby</div>
                <div>Doo</div>
                <div>Cristal Cove</div>
            </div> */}
        </div>
    )
    }

export default Avaleht