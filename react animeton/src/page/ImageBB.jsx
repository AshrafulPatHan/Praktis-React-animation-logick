import React from 'react';

const ImageBB = () => {
    const handelSubmit = (event) =>{
        event.preventDefault()

        // get file
        // const image = event.target.image.value
         const image = event.target.image.files[0]
        console.log(`the file is ->${image}`);

        // i don't know
        const data =new FormData()
        data.append("image", image)

        // send image into imageBB
        fetch("https://api.imgbb.com/1/upload?key=c2227c5e01b833d595ad17d44eb7759c" ,{
            method:"POST",
            body:data
        })
        .then(res => res.json() )
        .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
            <input type="file" name="image" id="" />
            <button type='submit' className='bg-amber-200 p-6'>submit</button>
            </form>
        </div>
    );
};

export default ImageBB;
