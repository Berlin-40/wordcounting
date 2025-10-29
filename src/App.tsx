import { useState } from 'react'
import './App.css'
import WordItem from './components/WordItem'

type Ordre = "Croissant"|"Décroissant"
type Word = {
  mot:string,
  count:number
}

type WordCounter = {
  isSensible:boolean,
}

function App() {

  const countWords = () => {
    const map: { [key: string]: Word } = {};

    listOfWords.forEach(w => {
      if (w.length === 0) return; // ignore les chaînes vides

      if (map[w]) {
        map[w].count += 1;
      } else {
        map[w] = { mot: w, count: 1 };
      }
    });

    return map; // 🔹 très important
  };

  function clear(){
    setText("");
  }
  const [text,setText] = useState("")
  const listOfWords = text.split(/[,;:!'^)(|).> ]+/).filter(w => w.length > 0);
  let total = listOfWords.length
  const [ordre,setOrdre] = useState("Croissant" as Ordre)
  const wordArray = Object.values(countWords()).sort((a,b)=> ordre === "Croissant"?a.count - b.count:-a.count + b.count);
  const data = [
  { mot: "bois", count: 1},
  { mot: "bois", count: 8, type: "warning" },
  { mot: "bûcheron", count: 100, type: "success" },
];

  return (
  <div className=" flex flex-col gap-2 justify-center rounded bg-primary shadow-secodary/50">
  
  <div className='m-3'>
    <textarea
    className="bg-accent/20 h-50 rounded w-full p-2 "
    placeholder="Écris quelque chose..."
    value={text}
    onChange={it=> setText(it.target.value)}
  ></textarea>
  </div>
  <div className='flex justify-end px-20'>
    <button className='btn btn-soft' onClick={()=>clear()}>Clear</button>
  </div>
  <div className='flex justify-start px-5'>
    <p className="font-bold text-lg">Total : {total} mots</p>
  </div>
  <div>
    <div className="space-y-2 flex-1 h-fit">
      <div className="flex flex-wrap gap-4 mx-5">
        
        <button className={`btn btn-soft ${ordre === "Croissant" ? "btn-primary":""}`}
        onClick={() => setOrdre("Croissant")} >
        Croissant</button>

              
        <button className={`btn btn-soft ${ordre === "Décroissant" ? "btn-primary":""}`}
        onClick={() => setOrdre("Décroissant")} >
        Décroissant</button>
      </div>      
    <div className="flex flex-wrap gap-2 m-3">
      {wordArray.map(item => <WordItem key={item.mot} word={item} />)}
    </div>
  </div>
  </div>
  </div>
  )
}

export default App
