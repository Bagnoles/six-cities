import FavoriteCard from '../../components/favorite-card/favorite-card.tsx';
import { TCard } from '../../mock/types.ts';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import FavoritesEmpty from './favorites-empty.tsx';
import CityItem from '../../components/city-item/city-item.tsx';

type TGroupedByCity = {
  [index: string]: TCard[];
}

function FavoritesScreen(): JSX.Element {

  const cards = useAppSelector((state) => state.cards);

  const favoriteCards = cards.filter((card) => card.isFavorite);
  const groupedByCity = favoriteCards.reduce((result: TGroupedByCity, card) => {
    if (result[card.city.name]) {
      result[card.city.name].push(card);
    } else {
      result[card.city.name] = [card];
    }
    return result;
  }, {});

  if (favoriteCards.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedByCity).map(([city, cardsByCity]) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <CityItem city={city} />
                  </div>
                </div>
                <div className="favorites__places">
                  {cardsByCity.map((card) => <FavoriteCard card={card} key={card.id} />)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
