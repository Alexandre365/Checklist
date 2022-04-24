import React, {useState} from 'react';

import './Card.css'
type Props = {
    id:number,
    value:string,
};
export default (props: Props) => {
    const [togglmenu, setTogglmenu] = useState(false)
    const [NewTask, SetNewTask] = useState('Novo task')
    const [NameTask, setNameTask] = useState('')
    const [List, SetList] = useState([])
    const [Span,setSpan] = useState('')
    
    function OnChange(){
        if (NewTask == 'Novo task') {
            return 'Cancelar'
        } else {
            return 'Novo task'
        }
    }

    return (
        <div>
            <div className='title'>
                <h2>{props.value}</h2>
                <button onClick={()=>{
                    setTogglmenu(!togglmenu)
                    SetNewTask(OnChange())
                }}>{NewTask}</button>
            </div>
            <div className='dados'>
            {List.map((item) => 
                <div className='Card_dados' key={item.id}>
                    <input key={item.id} type="checkbox" className='checkbox' />
                    <label htmlFor="">{item.value}</label>
                    <button onClick={()=>{
                        SetList(List.filter((id)=> id.id !== item.id))
                    }}>x</button>
                </div>
            )}
            </div>
            <div className='Header_Form'>
                {(togglmenu) && (
                    <div className='Header_Form_Input'>
                        <label>Nome:</label>
                        <input type="text" placeholder='Ex: "Trabalho de Química"'
                        value={NameTask} onChange={(e) => setNameTask(e.target.value)} />
                        <span>{Span}</span>
                        <button onClick={()=>{
                            if (NameTask != '') {
                                let name = NameTask[0].toUpperCase() + NameTask.substr(1)
                                setSpan('')
                                SetList([...List, {
                                    id:List.length,
                                    value:name,
                                    boolean: false
                                }])
                            }else{
                                setSpan('Coloque o Nome da sua task!')
                            }
                        }}>+Add new task</button>
                    </div>
                )}
            </div>
        </div>
    );
};