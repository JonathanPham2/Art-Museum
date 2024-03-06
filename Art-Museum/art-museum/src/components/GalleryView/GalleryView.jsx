import { useNavigate, useParams, Navigate } from "react-router-dom"





export default function GalleryView({galleries}){
    // const navigate = useNavigate()
    const { galleryId } = useParams();


    console.log( galleries)
    
    console.log( galleryId)
    const gallery = galleries.find((gallery)=> 
        gallery.id ===  +galleryId
    )
    console.log(gallery)
    if(!gallery){
        return (
            <Navigate to="/" replace={true} />
        )
    }

    
    return (
    <div className="gallery">
        <h1>Hello from GalleryView</h1>
        <h2>Gallery Name: {gallery.name}</h2>
    </div>
    )
}