import './animatedLetters.scss';

interface AnimatedLetterProps {
  letterClass: string;
  strArray: string[];
  idx: number;
  id: string;
}


const AnimatedLetters = ({ letterClass, strArray, idx, id }: AnimatedLetterProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <h1 id={id} key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </h1>
      ))}
    </span>
  );
};

export default AnimatedLetters;
