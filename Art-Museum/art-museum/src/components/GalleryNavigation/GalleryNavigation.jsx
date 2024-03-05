import {NavLink} from 'react-router-dom'
import './GalleryNavigation.css'



export default function GalleryNavigation ({galleries}) {


    return (
        <nav>
            <NavLink to= "/">home page </ NavLink >
            {galleries.map((gallery) => (
                <NavLink
                    key= {gallery.id}
                    to={`/galleries/${gallery.id}`}>
                        {gallery.name}
                </NavLink>
            ))}
        <h1>Galleries</h1>

        </nav>
    )
}
