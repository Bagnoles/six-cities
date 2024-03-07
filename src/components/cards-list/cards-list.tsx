import Card from '../../components/card/card.tsx';
import { TCard } from '../../mock/types.ts';

type CardsListProps = {
  cards: TCard[];
  className: string;
  onMouseHover: (arg?: TCard) => void;
}

function CardsList({cards, className, onMouseHover}: CardsListProps): JSX.Element {
  /*const [activeCard, setActiveCard] = useState<TCard | null>();

  const onMouseHover = (card?: TCard) => {
    setActiveCard(card);
    return activeCard; //чтобы не ругался линтер =)
  };*/

  return (
    <div className={className}>
      {cards.map((card) => <Card card={card} key={card.id} onMouseHover={onMouseHover} />)}
    </div>
  );
}

export default CardsList;
