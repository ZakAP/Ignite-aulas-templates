import '../styles/sidebar.scss';
import { Button } from '../components/Button';
import { GenreResponseProps } from '../modules/Interfaces';

interface ContentProps {
  genre: GenreResponseProps[];
  handleButton: (id: number) => void;
  selectedGenreId: number;
}


export function SideBar(props : ContentProps) {
  return (
   <>
     <nav className="sidebar">
       <span>Watch<p>Me</p></span>
 
       <div className="buttons-container">
         {props.genre.map(genre => (
           <Button
             key={String(genre.id)}
             title={genre.title}
             iconName={genre.name}
             onClick={() => props.handleButton(genre.id)}
             selected={props.selectedGenreId === genre.id}
           />
         ))}
       </div>
     </nav>
   </>) 
}