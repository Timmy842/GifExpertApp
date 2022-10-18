import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['Correctivo']);

    // const handleAdd = () => {
    //     setCategories( [ ...categories, 'Sporte'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>            
        </>
    );
    
}

export default GifExpertApp;
