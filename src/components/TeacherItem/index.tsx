import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem (){
    return (
        <article className="teacher-item">
                    <header>
                    <img src="https://pbs.twimg.com/profile_images/1297659970801016832/JvTVVMip_reasonably_small.jpg" alt="German Cano"/>
                    <div>
                        <strong>German Cano</strong>
                        <span>Futebol</span>
                    </div>
                    </header>
                    
                    <p>
                        Professor de Futebol, formado na melhor escola do mundo (CRVG).
                        <br/> <br/>
                        Maior finalizador do campeonato brasileiro e futuro artilheiro da temporada 2020.  
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type='button' >
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato.
                        </button>
                    </footer>
                </article> 
    );
}

export default TeacherItem;