import React, {useState} from 'react';
import Card from './components/Card';
import './App.css'
type Props = {
    
};
export default (props: Props) => {


    const [togglmenu, setTogglmenu] = useState(false)
    const [List, SetList] = useState([])
    const [NameChecklist, setNameChecklist] = useState('')
    const [NewChecklist, SetNewChecklist] = useState('Novo checklist')
    const [Span,setSpan] = useState('')



    function Dados(){
        if (NameChecklist != '') {
            let name = NameChecklist[0].toUpperCase() + NameChecklist.substr(1)
            setSpan('')
            SetList([...List, {
                id:List.length,
                value:name,
            }])
            
        } else {
            setSpan('Coloque o Nome de sua checklist!')
        }
    }
    function OnChange(){
        if (NewChecklist == 'Novo checklist') {
            return 'Cancelar'
        } else {
            return 'Novo checklist'
        }
    }

    return <div className='Container'>
        <div className='box'>
            <header>
                <div className='Header'>
                    <div className='title'>
                        <h1>Checklist</h1>
                        <button onClick={()=>{
                            setTogglmenu(!togglmenu)
                            SetNewChecklist(OnChange())
                        }}>{NewChecklist}</button>
                    </div>
                    <div className='Header_txt'>
                        <p>
                            Uma lista de verificação é um tipo de auxiliar de trabalho usado para reduzir o fracasso, compensando os limites potenciais da memória e atenção humana.
                        </p>
                    </div>
                    {(togglmenu) && (
                        <div className='Header_Form'>
                            <label>Nome:</label>
                            <input type="text" placeholder='Ex: "Privado"' value={NameChecklist} onChange={(e) => setNameChecklist(e.target.value)} />
                            <span>{Span}</span>
                            <button onClick={Dados}>+ Add checklist</button>
                        </div>
                    )}
                </div>
            </header>
            <main>
                {List.map((item) => 
                    <Card key={item.id} id={item.id} value={item.value} />
                )}
            </main>
        </div>
    </div>
};