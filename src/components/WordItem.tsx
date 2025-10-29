type Word = {
  mot:string,
  count:number
}

type Props = {
    word: Word
}
function WordItem({word}:Props) {
  
  return (
    <div>
          <div className="px-2 py-1">
            <span className={`badge badge-soft ${
            word.count>10?"badge-error":
            word.count<5?"badge-success":"badge-warning"}`}>{word.mot}({word.count})</span >
          </div>
    </div>
    )
}

export default WordItem
