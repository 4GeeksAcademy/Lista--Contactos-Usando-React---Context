import React from "react";

export function Card() {


    return (
        
            <div className="border border-2 border-dark p-3 mx-auto w-75 row">
                <header className="col-2"><img className="rounded-circle" src="https://picsum.photos/id/237/150/150" alt="" /></header>
                <article className=" col-6 d-flex flex-column" style={{marginLeft:' 4rem'}}>
                    <h6>Mike Anamendolla</h6>
                    <p><i class="me-3 fa-solid fa-location-dot"></i>5842 Hillcrest Rd</p>
                    <p><i class="me-3 fa-solid fa-phone"></i>(870) 288-4149</p>
                    <p><i class="me-3 fa-solid fa-envelope"></i>mike.ana@example.com</p>
                    {/* div.container*3{$hoola} */}
                </article>
                <div className="col-2 d-flex flex-row gap-5 justify-content-end">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-trash-can"></i>
                </div>
                <footer></footer>
            </div>
        
    )

}
// export default vista;