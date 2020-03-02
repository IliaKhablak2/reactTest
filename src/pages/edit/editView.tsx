import React, { useState, useEffect } from 'react';


function EditView({ one }: { one: any }) {

    if (one) {
        return (
            <h1>
                {one.title}
            </h1>
        )
    }else{
        return (
            <h1>Loading...</h1>
        )
    }

}

export default EditView;