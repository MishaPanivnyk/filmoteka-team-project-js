import './userAuth/firebase-auth-import';
import './acive_button';
import Spinner from './spinner';
import { saveGenres } from './genres_storage';
import './add_to_list';
import './library_lists';
import { onModalOpenFilm } from './modal-film';
import { onBackdropClick } from './modal-film';
import { onEscBtnPress } from './modal-film';
import { toggleModal, toggleCard } from './modal-team.js';
saveGenres();
import {onWachedLibBtnClick} from './library_lists'
onWachedLibBtnClick();
